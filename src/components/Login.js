import Header from "./Header";
import "../App.css";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  const clickAction = () => {

  }
  return (
    <div className="bgimg">
      <Header />
      <div className="signin-section p-12 w-3/12 mx-auto">
        <h1 className="signin-title">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        <div>
          {!isSignInForm ? <input type="text" placeholder="Full Name" className="p-2 m-2"/> : ''}
          <input type="text" placeholder="Email or phone number" className="p-2 m-2"/>
          <input type="password" placeholder="Password" className="p-2 m-2"/>
          <button className="signin-btn" onClick={clickAction}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        </div>
        <p className="signup-txt">{isSignInForm ? 'New to Netflix?' : 'Already Registered?'} <span onClick={toggleForm}>{isSignInForm ? 'Sign up now' : 'Sign in now'}</span></p>
      </div>
    </div>
  );
};
export default Login;
