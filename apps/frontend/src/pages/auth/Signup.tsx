export default function Signup() {
  return (
    <div className="w-full">
      <div className="">
        <div className="logo">
          <img src="#" alt="eduvi logo" />
          <h1 className="">Welcome to Eduvi Online Learning Platform</h1>
        </div>
        <div className="">
          <img src="#" alt="svg viewer" className="" />
          <div className="">...</div>
        </div>
      </div>
      <div className="sign-up-panel">
        <div className="">
          <button className="">Signup with Google</button>
        </div>
        <div className="">
          <h2 className=""> - Or signup with your email - </h2>
          <div className="">
            <label htmlFor="fullName" className="">
              Full Name
              <input type="text" id="fullName" />
            </label>
            <label htmlFor="email" className="">
              Email
              <input type="email" id="email" />
            </label>
            <label htmlFor="password" className="">
              Email
              <input type="password" id="password" />
            </label>
            <label htmlFor="terms">
              I agree to the <span>Terms and Conditions</span>
              <input type="checkbox" name="terms" id="terms" />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
