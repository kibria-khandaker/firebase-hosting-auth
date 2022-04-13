import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import AutoLoginWithFirebase from './../AutoLoginWithFirebase/AutoLoginWithFirebase';

const SignUp = () => {

    //-1--------------------
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate(); 
    
    //-3--------------------
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    //-2--------------------

    const handleNameBlur = event => {
        setName(event.target.value);
    }
    console.log(handleNameBlur);
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    //-3--------------------
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Both Password not match')
            return;
        }
        if (password.length < 6) {
            setError('Password need more then 6 characters')
            return;
        }
        // react hook er theke neoa
        createUserWithEmailAndPassword(email, password)
        .then(()=>navigate('/home'))
        
    }
    //-4--------------------
    // if (user) {
    //     navigate('/home');
    // }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 bg-info mx-auto py-5 px-5 min-vh-100'>
                    <h2 className='from-title'>Sign Up</h2>
                    <form onSubmit={handleCreateUser} className='my-form' >
                        
                        <div className="d-flex flex-column">
                            <label htmlFor="name">Name</label>
                            <input onBlur={handleNameBlur} className='border-0 rounded' type="text" name="name" id="" required />
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} className='border-0 rounded' type="email" name="email" id="" required />
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} className='border-0 rounded' type="password" name="password" id="" required />
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="confirm-password"> Confirm Password</label>
                            <input onBlur={handleConfirmPasswordBlur} className='border-0 rounded' type="password" name="confirm-password" id="" required />
                        </div>
                        <input className='border-0 rounded w-50 my-3 ' type="submit" value="SignUp" />
                    </form>
                    <p className='new-account-link'>
                        <b>Already have your account? <Link to='/login'> Login </Link></b>
                    </p>

                    <AutoLoginWithFirebase></AutoLoginWithFirebase>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

// Problem need to solve ****************
// how can send Name and Address ans Verification link to user email by using react hook
//  error show for this reason   const navigate = useNavigate(); = Done