import { FaGooglePlusSquare } from "react-icons/fa"
import eduviLogo from "../../assets/img/eduvi-dummy-logo.png"
import signupIllustration from "../../assets/img/signup-illustration.svg"

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
        <form className="max-w-md mx-auto w-full">
          {/* Google Sign up */}
          <button className="w-4/5 flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg mb-8 hover:bg-gray-50 transition-colors" type="button">
              <FaGooglePlusSquare size={32} color="#E93E30" />
              <span className="text-gray">Signup with google</span>
            </button>

          <div className="text-center mb-8">
            <span className="text-gray">
              - Or signup with your email -
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input type="text" id="fullName" name="fullName" placeholder="Esther Howard" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"  />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input type="email" id="email" name="email" placeholder="bill.sanders@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input type="password" id="password" name="password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="*********" />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <input type="checkbox" id="terms" name="terms" className="w-4 h-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500" />
            <label htmlFor="terms" className="text-sm text-gray">
              I agreed to the {" "}
              <a href="/terms" className="text-primary-900 font-medium">Terms & Conditions</a>
            </label>
          </div>

          <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors my-6">
            Sign Up
          </button>

          <p className="text-center text-sm text-gray">
            Already have account?{" "}
            <a href="/signin" className="text-purple-600 hover:text-purple-700">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  )
}
