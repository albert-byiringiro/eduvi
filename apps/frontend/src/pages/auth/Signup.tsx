import { FaGooglePlusSquare } from "react-icons/fa"
import eduviLogo from "../../assets/img/eduvi-dummy-logo.png"
import signupIllustration from "../../assets/img/signup-illustration.svg"

export default function Signup() {
  return (
    <div className="w-full min-h-screen grid grid-cols-2 bg-primary-50">
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

          <div className="">
            <span className="">
              - Or signup with your email -
            </span>
          </div>

          <div className="">
            <div>
              <label htmlFor="fullName">
                Full Name
              </label>
              <input type="text" id="fullName" name="fullName" placeholder="Esther Howard" className="" />
            </div>

            <div>
              <label htmlFor="email">
                Email
              </label>
              <input type="email" id="email" name="email" placeholder="bill.sanders@example.com" className="" />
            </div>

            <div>
              <label htmlFor="password">
                Password
              </label>
              <input type="password" id="password" name="password" className="" />

              <button type="button" className=""></button>
            </div>
          </div>

          <div className="">
            <input type="checkbox" id="terms" name="terms" className="" />
            <label htmlFor="terms" className="">
              I agreed to the {" "}
              <a href="/terms" className="">Terms & Conditions</a>
            </label>
          </div>

          <button type="submit" className="">
            Sign Up
          </button>

          <p className="">
            Already have account?{" "}
            <a href="/signin" className="">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  )
}
