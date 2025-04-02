import eduviLogo from "../../assets/img/eduvi-dummy-logo.png"
import signupIllustration from "../../assets/img/signup-illustration.svg"
import AuthForm from "../../components/sections/AuthForm"

export default function Signup() {
  return (
    <div className="w-full min-h-screen grid grid-cols-2 bg-white">
      {/* Left Panel */}
      <div className="p-12 flex flex-col justify-center">
        <div className="mb-12">
          <img src={eduviLogo} alt="Eduvi Logo" className="h-10 mb-6" />
          <h1 className="text-4xl font-bold text-primary-900 mb-4">
            Welcome to <br />
            Eduvi Online <br />
            Learning Platform
          </h1>
        </div>
        <div className="flex justify-center">
          <img src={signupIllustration} alt="Learning Illustration" className="w-4/5" />
        </div>
      </div>

      {/* Right Panel - Sign Up Form */}
      <div className="p-12 flex flex-col justify-center">
        <AuthForm/>
      </div>
    </div>
  )
}
