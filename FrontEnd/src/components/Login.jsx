import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-fav-color h-screen w-screen flex overflow-hidden '>
            <div className='text-white text-center w-full flex flex-col h-full overflow-hidden items-center my-11'>
                <h1 className='font-yusei text-4xl mb-6'>Login</h1>
                <h3 className='font-yusei text-xl mb-6'>Unlock your exclusive access to a world of comfort and convenience. <br /> Welcome back!</h3>
                <form className='border-4 border-slate-100 rounded-lg p-8 max-w-lg w-full shadow-2xl bg-f-color '>
                    <div className="flex flex-col items-center space-y-4">
                        <input
                            type="email"
                            placeholder='Enter your Email'
                            required
                            className='w-full bg-transparent border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-100 transition duration-300'
                        />
                        <input
                            type="password"
                            placeholder='Enter your Password'
                            required
                            className='w-full bg-transparent border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-100 transition duration-300'
                        />
                        <button className='bg-fav-color text-white py-2 px-4 rounded-md  border border-transparent hover:border-white hover:border-2 transition duration-300 ease-in-out w-full'>
                            Login
                        </button>
                    </div>
                    <div className='my-7 text-black'>
                        Not a member yet? <Link to="/Register" className='text-white hover:underline'>SignUp here</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
