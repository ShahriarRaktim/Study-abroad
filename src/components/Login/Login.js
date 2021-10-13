import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const {user, googleSignIn} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const from = location.state?.from || '/home'

    const signIn=()=>{
        googleSignIn()
        .then(result=>{
            history.push(from);
        })
        
    }
    return (
        <>
        {
            user.email ? <h1>Successfully loged In</h1>
            :
            <div className='login'>
                <h1>Please Log In !</h1>
            <form>
                <input type="email" name="" placeholder="Enter Your Email" />
                <br />
                <input type="password" name="" placeholder="Enter Your Password" />
                <br />
                <input type="submit" value="login" />
            </form>
            <button onClick={signIn} className='btn'>Google Sign In</button>
            <p>Don't You have account?<NavLink className='btn' to="/register">Create account</NavLink></p>
        </div>
        }
        </>
    );
};

export default Login;