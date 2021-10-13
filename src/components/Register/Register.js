import React from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { user, googleSignIn } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const from = location.state?.from || '/information'

  const signIn=()=>{
      googleSignIn()
      .then(result=>{
          history.push(from);
      })
      
  }
  return (
    <>
      {user.email ? (
        <h1>Successfully Created Account !</h1>
      ) : (
        <div className="login">
            <h1>Please Register</h1>
          <form>
            <input type="email" name="" placeholder="Enter Your Email" />
            <br />
            <input type="password" name="" placeholder="Enter Your Password" />
            <br />
            <input type="submit" value="Register" />
          </form>
          <button onClick={signIn} className="btn">
            Google Sign In
          </button>
          <p>
            Have you already an account?
            <NavLink className="btn" to="/login">
              Login
            </NavLink>
          </p>
        </div>
      )}
    </>
  );
};

export default Register;
