import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setLogin } from '../redux/slice/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                email,
                password,
            };
    
            const response = await axios.post("http://localhost:3000/api/auth/Login", data);
            
            if (response.status === 200) {
                const { user, token } = response.data;
                dispatch(setLogin({ user, token }));
                navigate("/");
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                console.log(error);
                alert("Invalid email or password");
            } else {
                console.log(error);
            }
        }
    };
    

    return (
        <div className='bg-fav-color min-h-screen w-screen flex'>
            <div className='text-white text-center w-full flex flex-col items-center my-6'>
                <h1 className='font-yusei text-4xl mb-6'>Login</h1>
                <h3 className='font-yusei text-xl mb-6'>
                    Unlock your exclusive access to a world of comfort and convenience. <br /> Welcome back!
                </h3>
                <form className='border-4 border-slate-100 rounded-lg p-8 max-w-lg w-full shadow-2xl bg-f-color'>
                    <div className="flex flex-col items-center space-y-4">
                        <input
                            type="email"
                            placeholder='Enter your Email'
                            required
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full bg-transparent border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-100 transition duration-300'
                        />
                        <input
                            type="password"
                            placeholder='Enter your Password'
                            required
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full bg-transparent border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-100 transition duration-300'
                        />
                        <button onClick={handleSubmit} className='bg-fav-color text-white py-2 px-4 rounded-md border border-transparent hover:border-white hover:border-2 transition duration-300 ease-in-out w-full'>
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

