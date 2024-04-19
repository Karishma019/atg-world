import { useState } from "react";
import signUpImg from "../assets/atg_illustration.png";
import faceBookImg from "../assets/fb.png";
import googleIcon from "../assets/googleIcon.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

function SignUpForm({ closeModal }) {
  const [passwordType, setPasswordType] = useState("password");
  const [isSignUp, setIsSignUp] = useState(true);

  const handleInputType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const handleToggle = () => {
    if (isSignUp) {
      setIsSignUp(false);
    } else {
      setIsSignUp(true);
    }
  };

  return (
    <div className="bg-white border rounded-4 position-relative custom-form">
      <span className="close pointer" onClick={closeModal}>
        <IoIosCloseCircle />
      </span>
      <p className="text-success m-0 py-3 px-3 fw-bold rounded-top-4 text-center text-md bg-cs-green d-none d-md-block">
        Let's learn, share & inspire each other with our passion for computer
        engineering. Sign up now 🤘🏼
      </p>
      <div className="py-2 px-4 d-flex gap-4 py-4 flex-row">
        <div className="d-flex flex-column gap-2 w-100 w-md-50">
          <h3 style={{ fontSize: "24px" }} className="d-none d-md-block">
            {isSignUp ? "Create Account" : "Sign In"}
          </h3>
          <h3 style={{ fontSize: "20px" }} className="d-md-none">
            {isSignUp ? "Create Account" : "Welcome back!"}
          </h3>
          <form className="bg-cs-gray">
            {isSignUp && (
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
                <input
                  type="text"
                  className="form-control outline-none"
                  placeholder="Last name"
                  aria-label="First name"
                />
              </div>
            )}
            <input
              type="email"
              className="form-control outline-none"
              placeholder="Email"
              aria-label="First name"
            />
            <div className="form-control d-flex justify-content-between align-items-center">
              <input
                type={passwordType}
                placeholder="Password"
                className="custom-input"
                aria-label="First name"
              />
              <IoEyeOutline
                className="pointer fs-5"
                onClick={handleInputType}
              />
            </div>

            {isSignUp && (
              <input
                type="password"
                className="form-control outline-none"
                placeholder="Confirm Password"
                aria-label="First name"
              />
            )}
          </form>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary fw-bold rounded-pill my-3 text-md create-btn">
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
            <button className="btn d-md-none " onClick={handleToggle}>
              or, {isSignUp ? "Sign In" : "create Account"}
            </button>
          </div>
          <button className="btn border fw-bold text-md">
            <img src={faceBookImg} className="pe-2" />
            {isSignUp ? "Sign up With Facebook" : "Sign in With Facebook"}
          </button>
          <button className="btn border fw-bold text-md">
            <img src={googleIcon} className="pe-2" />
            {isSignUp ? "Sign up With Google" : "Sign in With Google"}
          </button>
          {!isSignUp && (
            <p
              style={{
                fontSize: "12px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Forget Password?
            </p>
          )}
          {isSignUp && (
            <p className="text-sm d-md-none text-center">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          )}
        </div>
        <div className="w-50 d-none d-md-block">
          <div className="justify-content-end align-items-center d-flex">
            <p className="m-0" style={{ fontSize: "13px" }}>
              {isSignUp
                ? "Already have an account"
                : "Don’t have an account yet?"}
              <span
                className="text-primary fw-bold pointer"
                onClick={handleToggle}
              >
                {isSignUp ? "Sign In" : "Create new for free!"}
              </span>
            </p>
          </div>
          <div>
            <img src={signUpImg} alt="" />
          </div>
          {isSignUp && (
            <p className="text-sm">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
