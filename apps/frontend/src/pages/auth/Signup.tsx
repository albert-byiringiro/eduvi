import eduviLogo from '../../assets/img/eduvi-dummy-logo.png';
import signupIllustration from '../../assets/img/signup-illustration.svg';
import SignupForm from '../../components/forms/SignupForm';

export default function Signup() {
  return (
    <div className="grid w-full min-h-screen grid-cols-1 bg-white lg:grid-cols-2">
      <div className="flex flex-col justify-center p-6 lg:p-12">
        <div className="mb-8 lg:mb-12">
          <img src={eduviLogo} alt="Eduvi Logo" className="h-8 mb-4 lg:h-10 lg:mb-6" />
          <h1 className="mb-4 text-3xl font-bold text-primary-900 lg:text-4xl">
            Welcome to <br />
            Eduvi Online <br />
            Learning Platform
          </h1>
        </div>
        <div className="flex justify-center">
          <img src={signupIllustration} alt="Learning Illustration" className="w-4/5" />
        </div>
      </div>

      <div className="flex flex-col justify-center p-6 lg:p-12">
        <SignupForm />
      </div>
    </div>
  );
}
