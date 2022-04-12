import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import AutoLoginWithFirebase from '../AutoLoginWithFirebase/AutoLoginWithFirebase';
import auth from '../firebase.init';
import './Login.css';

const Login = () => {
    //-1--------------------
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();
    //-3--------------------
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    //-4--------------------
    const location = useLocation();  
    const from = location.state?.from?.pathname || "/";

    //-2--------------------
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    //-2b------
    // if (user) {
    //     navigate(from, { replace: true });
    // }
    //-2a------
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    //---------------------

    return (
        <div className='container '>
            <div className='row'>
                <div className='col-md-6 bg-info py-5 px-5 mx-auto min-vh-100'>
                    <h2 className='from-title'>Login</h2>
                    <form onSubmit={handleUserSignIn} className='my-form' >
                        <div className="d-flex flex-column">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} className='border-0 rounded' type="email" name="email" id="" required />
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} className='border-0 rounded' type="password" name="password" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error?.message}</p>
                        {
                            loading && <p style={{ color: 'green' }}>Loading .. . </p>
                        }
                        <input className='border-0 rounded w-50 my-3' type="submit" value="Login" />
                    </form>
                    <p className='new-account-link'>
                        <b>New to Ema-Jhon? <Link to='/signup'> Create an account </Link></b>
                    </p>
                    <AutoLoginWithFirebase></AutoLoginWithFirebase>
                </div>
            </div>
        </div>
    );
};

export default Login;