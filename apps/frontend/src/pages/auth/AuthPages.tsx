import authIllustration from '../../assets/auth-illustration.svg';
import Logo from '../../assets/Logo';

export default function AuthPages({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid w-full h-full grid-cols-2 ">
      <div className="flex flex-col justify-center px-12 py-8 ">
        <div className="mb-8">
          <Logo className="mb-6" />
          <h1 className="mb-4 text-4xl font-bold text-primary-900">
            Welcome to <br />
            Eduvi Online <br />
            Learning Platform
          </h1>
        </div>
        <div className="flex justify-center">
          <img src={authIllustration} alt="Learning Illustration" className="w-4/5" />
        </div>
      </div>

      <div className="flex flex-col justify-center px-16 py-8">{children}</div>
    </div>
  );
}
