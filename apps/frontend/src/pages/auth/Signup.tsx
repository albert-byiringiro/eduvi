import eduviLogo from "../../assets/img/eduvi-dummy-logo.png"
import signupIllustration from "../../assets/img/signup-illustration.svg"

export default function Signup() {
  return (
    <div className="">
      {/* Left Panel */}
      <div className="">
        <div className="">
          <img src={eduviLogo} alt="Eduvi Logo" className="" />
          <h1 className="">
            Welcome to <br />
            Eduvi Online <br />
            Learning Platform
          </h1>
        </div>
        <div className="">
          <img src={signupIllustration} alt="" className="" />
        </div>
      </div>

      {/* Right Panel - Sign Up Form */}
      <div className="">
        <form className="">
          {/* Google Sign up */}
          <button className="" type="button"><span>Signup with google</span></button>

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
