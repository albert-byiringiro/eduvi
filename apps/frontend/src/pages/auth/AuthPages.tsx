import signupIllustration from '../../assets/img/signup-illustration.svg';
import Logo from '../../assets/Logo';

export default function AuthPages({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid w-full min-h-screen grid-cols-1 bg-white lg:grid-cols-2">
      <div className="flex flex-col justify-center p-6 lg:p-12">
        <div className="mb-8 lg:mb-12">
          <Logo className="mb-4 lg:mb-6" />
          <h1 className="mb-4 text-3xl font-bold text-primary-900 lg:text-4xl">
            Welcome to <br />
            Eduvi Online <br />
            Learning Platform
          </h1>
        </div>
        <div className="flex justify-center">
          <img src={signupIllustration} alt="Learning Illustratioyn" className="w-4/5" />
        </div>
      </div>

      <div className="flex flex-col justify-center p-6 lg:p-12">{children}</div>
    </div>
  );
}
