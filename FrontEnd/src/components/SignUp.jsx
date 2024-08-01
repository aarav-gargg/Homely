import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='flex min-h-screen'>
      <div className='w-1/2 bg-gray-100 flex items-center justify-center'>
        <h1 className='text-4xl font-extrabold text-blue-700 p-10'>Unlock Your Perfect Space: Sign Up Now to Find Your Ideal Room!</h1>
      </div>
      <div className='w-1/2 flex flex-col items-center justify-center bg-gray-200'>
        <form className="form border-4 border-slate-950 rounded-lg p-8 max-w-lg w-full shadow-2xl bg-white">
          <div className="flex flex-col items-center space-y-4">
            <input required type="text" placeholder='Enter your Name' name='Name' className='rounded-md border-2 w-full py-2 px-4 text-gray-900 focus:outline-none focus:border-blue-500'/>
            <input required type="email" placeholder='Enter your Email Address' name='Email' className='rounded-md border-2 w-full py-2 px-4 text-gray-900 focus:outline-none focus:border-blue-500'/>
            <input required type="password" placeholder='Enter your Password' name='Password' className='rounded-md border-2 w-full py-2 px-4 text-gray-900 focus:outline-none focus:border-blue-500'/>
            <input required type="password" placeholder='Confirm your Password' name='ConPassword' className='rounded-md border-2 w-full py-2 px-4 text-gray-900 focus:outline-none focus:border-blue-500'/>
            <div className="w-full flex justify-center">
              <label htmlFor='image' className='bg-gray-200 border-2 border-dashed border-gray-300 rounded-md py-2 px-4 w-full text-center cursor-pointer hover:bg-gray-300'>
                Upload Profile Picture
                <input type="file" id='image' name='profile' accept='image/*' className='hidden'/>
              </label>
            </div>
            <button className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full'>Sign Up</button>
          </div>
        </form>
        <div className='my-5 text-gray-700'>
          Already have an account? <Link to="/login" className='text-blue-500 hover:underline'>Log in here</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp



