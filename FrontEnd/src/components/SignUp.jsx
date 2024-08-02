import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [SignupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    conpassword: "",
    profile: null,
  });

  const [profilePreview, setProfilePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile") {
      const file = files[0];
      setSignupData({
        ...SignupData,
        profile: file,
      });
      setProfilePreview(URL.createObjectURL(file));
    } else {
      setSignupData({
        ...SignupData,
        [name.toLowerCase()]: value,
      });
    }
  };

  return (
    <div className='flex min-h-screen'>
      <div className='w-1/2 bg-gray-400 flex items-center justify-center'>
        <h1 className='text-4xl font-extrabold text-white p-10'>Unlock Your Perfect Space: Sign Up Now to Find Your Ideal Room!</h1>
      </div>
      <div className='w-1/2 flex flex-col items-center justify-center bg-fav-color'>
        <form className="form border-4 border-slate-100 rounded-lg p-8 max-w-lg w-full shadow-2xl bg-f-color ">
          <div className="flex flex-col items-center space-y-4">
            <input
              required
              type="text"
              placeholder='Enter your Name'
              name='name'
              value={SignupData.name}
              onChange={handleChange}
              className='rounded-md border-2 w-full border-gray-100 py-2 px-4 text-gray-100 focus:outline-none focus:border-blue-500 bg-transparent'
            />
            <input
              required
              type="email"
              placeholder='Enter your Email Address'
              name='email'
              value={SignupData.email}
              onChange={handleChange}
              className='rounded-md border-2 w-full py-2 px-4 text-gray-100 focus:outline-none focus:border-blue-500 bg-transparent'
            />
            <input
              required
              type="password"
              placeholder='Enter your Password'
              name='password'
              value={SignupData.password}
              onChange={handleChange}
              className='rounded-md border-2 w-full py-2 px-4 text-gray-100 focus:outline-none focus:border-blue-500 bg-transparent'
            />
            <input
              required
              type="password"
              placeholder='Confirm your Password'
              name='conpassword'
              value={SignupData.conpassword}
              onChange={handleChange}
              className='rounded-md border-2 w-full py-2 px-4 text-gray-100 focus:outline-none focus:border-blue-500 bg-transparent'
            />
            <div className="w-full flex justify-center">
              <label
                htmlFor='profile'
                className={`relative bg-gray-200 border-2 border-dashed border-gray-300 rounded-md py-2 px-4 w-full text-center cursor-pointer hover:bg-gray-300 ${profilePreview ? 'h-32' : ''}`}
              >
                {profilePreview ? (
                  <div
                    className='absolute inset-0 bg-cover bg-center rounded-md'
                    style={{
                      backgroundImage: `url(${profilePreview})`,
                      height: '100%',
                      width: '100%',
                    }}
                  />
                ) : 'Upload Profile Picture'}
                <input
                  type="file"
                  id='profile'
                  name='profile'
                  accept='image/*'
                  onChange={handleChange}
                  className='hidden'
                />
              </label>
            </div>
            <button className='bg-fav-color text-white py-2 px-4 rounded-md border border-transparent hover:border-white hover:border-2 transition duration-300 ease-in-out w-full'>
              Sign Up
            </button>
          </div>
        </form>
        <div className='my-5 text-black'>
          Already have an account? <Link to="/Login" className='text-white hover:underline'>Log in here</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;





