import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react';
import { checkValidData } from '../utils/validate';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [error, setError] = useState(true);

    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };


    const handleButtonClick = () => {
        // validate the form data
        const error = checkValidData(email.current.value, password.current.value);
        console.log(email.current.value);
        console.log(error);
        setError(error);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt='logo'
                />
            </div>
            <form className='w-1/4 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "SignIn" : "Signup"}</h1>

                {!isSignInForm && (
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-4 my-4 w-full bg-gray-800 rounded-lg"
                    />
                )}

                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-800 rounded-lg"
                />

                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-800 rounded-lg"
                />

                <button
                    className='py-2 my-6 bg-red-700 w-full rounded-lg'
                    onClick={handleButtonClick}
                    type='button'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                {(error !== null) && (
                    <p className='text-red-700'>
                        {error}
                    </p>
                )}

                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
                </p>

            </form>
        </div>
    )
}

export default Login