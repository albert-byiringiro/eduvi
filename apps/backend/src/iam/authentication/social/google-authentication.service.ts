/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  ConflictException,
  Injectable,
  Logger,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';
import { AuthenticationService } from '../authentication.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { PostgresErrorCode } from 'src/database/postgres-error-codes.enum';

@Injectable()
export class GoogleAuthenticationService implements OnModuleInit {
  private readonly logger = new Logger(GoogleAuthenticationService.name);
  private oauthClient: OAuth2Client;

  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthenticationService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  onModuleInit() {
    const clientId = this.configService.get('GOOGLE_CLIENT_ID');
    const clientSecret = this.configService.get('GOOGLE_CLIENT_SECRET');

    this.oauthClient = new OAuth2Client(clientId, clientSecret);
  }

  async authenticate(token: string) {
    try {
      const loginTicket = await this.oauthClient.verifyIdToken({
        idToken: token,
      });

      const payload = loginTicket.getPayload();

      if (!payload?.email || !payload?.sub) {
        throw new UnauthorizedException('Invalid Google token payload');
      }

      const { email, sub: googleId } = payload;

      const user = await this.userRepository.findOneBy({ googleId });

      if (user) {
        return this.authService.generateTokens(user);
      } else {
        const newUser = await this.userRepository.save({ email, googleId });
        return this.authService.generateTokens(newUser);
      }
    } catch (err) {
      this.logger.error(
        `Google authentication failed: ${err.message}`,
        err.stack,
      );

      if (err.code === PostgresErrorCode.UniqueViolation) {
        throw new ConflictException('User already exists');
      }

      if (err instanceof UnauthorizedException) {
        throw err;
      }

      throw new UnauthorizedException(
        'Google authentication failed: Missing email or sub in token',
      );
    }
  }
}
