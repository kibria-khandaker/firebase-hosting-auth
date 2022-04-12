import React from 'react';
import { Link } from 'react-router-dom';
import AutoLoginWithFirebase from './../AutoLoginWithFirebase/AutoLoginWithFirebase';
import './Login.css';

const Login = () => {
    return (
        <div className='container '>
            <div className='row'>
                <div className='col-md-6 bg-info py-5 px-5 mx-auto min-vh-100'>
                    <h2 className='from-title'>Login</h2>
                    <form className='my-form' >
                        <div className="d-flex flex-column">
                            <label htmlFor="email">Email</label>
                            <input className='border-0 rounded' type="email" name="email" id="" required />
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="password">Password</label>
                            <input className='border-0 rounded' type="password" name="password" id="" required />
                        </div>
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