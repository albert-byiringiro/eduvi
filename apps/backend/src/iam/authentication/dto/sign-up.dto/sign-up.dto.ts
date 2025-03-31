import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class SignUpDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  fullname: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
