import React from 'react';
import Thumbnail from '../assets/thumbnail/hum.jpg';
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaGoogle,FaFacebook,FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <>
    <div >

      <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center "
        style={{ backgroundImage: `url(${Thumbnail})` }}
        >
    <div className='bg-transparent text-primary z-10 '>
          <h1 className='font-bold text-center text-2xl mb-2 bg-transparent'>
            Cultivating Knowledge, Growing Success
          </h1>
          <h2 className='font-bold text-center mb-4 bg-transparent'>
            Login to Explore, Discover and Implement!
          </h2>
    </div>
    <div className=' flex justify-center'>

        <div className='  m-4 p-8 rounded-lg bg-white'>
          <h2 className='text-center font-bold text-xl mb-4'>Sign In</h2>
          <form>
            <div className='flex flex-col items-center justify-center '>
              <div className='mb-4  '>
                <label htmlFor="email" className='block mb-1'>Email:</label>
              <div className='flex relative'>
              <CiMail className='absolute text-2xl block left-2 top-1/2 transform -translate-y-1/2'/>
                <input
                  type="email"
                  name="name"
                  id="name"
                  className='border w-96 p-2 pl-10'  
                  placeholder='Enter you email'
                  />
                  </div>
              </div>
              <div className='mb-4 '>
                <label htmlFor="password" className='block mb-1'>Password:</label>
                <div className='flex relative'>
                  <RiLockPasswordLine className='absolute left-2 text-2xl top-1/2 transform -translate-y-1/2'/>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className='border w-96 p-2 pl-10'
                  placeholder='Enter your password'
                  />
                  </div>
              </div>

              <div className='flex'>
              <div>
                <input type="checkbox" name="remember" id="remember" className='accent-accent text-white' />
                <label htmlFor="remember" className='ml-2 text-accent'>Remember me</label>
              </div>
              
              <Link to='/' className="text-accent ml-36"><button>Forgot Password</button></Link>
              
              </div>
              <button type='submit' className='border w-96 m-2 p-2 bg-accent text-white hover:text-accent hover:bg-primary'>
                Sign in
              </button>
            </div>
            <div className='flex flex-col justify-center items-center'>

            <p className=' border-x-2 border-accent p-2'>OR</p>
            <p>Don't have an account? <span className='text-accent'>Sign up</span></p>
            <div className='flex space-x-4 text-2xl '>
              <FcGoogle/>
              <FaFacebook/>
              <FaApple/>
            </div>
            </div>
          </form>
        </div>
                  </div>
      </div>
                  </div>
    </>
  );
}
