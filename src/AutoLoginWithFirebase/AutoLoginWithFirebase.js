import React from 'react';
import FacebookImg from '../images/facebook.png';
import GithubImg from '../images/github.png';
import GoogleLogo from '../images/google.svg';
import './AutoLoginWithFirebase.css';

const AutoLoginWithFirebase = () => {
    return (
        <div>
            <fieldset className='border p-2 pt-3 pb-4 rounded'>
                <legend className='float-none w-auto py-1 px-2 border border-5  rounded-circle text-white'>
                    Or
                </legend>
                <div>
                    <div className='input-wrapper rounded pt-1 pb-3 '>
                        <button className='login-auth w-100'>
                            <img className="btn_img" src={GoogleLogo} alt='' />
                            <p className='my-0'> Continue with Google </p>
                        </button>
                    </div>
                    <br />
                    <div className='input-wrapper rounded pt-1 pb-3 '>
                        <button className='login-auth w-100'>
                            <img className="btn_img" src={FacebookImg} alt='' />
                            <p className='my-0 '> Continue with Facebook </p>
                        </button>
                    </div>
                    <br />
                    <div className='input-wrapper rounded pt-1 pb-3 '>
                        <button className='login-auth w-100'>
                            <img className="btn_img" src={GithubImg} alt='' />
                            <p className='my-0'> Continue with GitHub </p>
                        </button>
                    </div>
                </div>
            </fieldset>
        </div>
    );
};

export default AutoLoginWithFirebase;