import React from 'react';
import Thumbnail from '../../assets/thumbnail/3.jpg';
import { CiMail,CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaGoogle,FaFacebook,FaApple,FaPhoneAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbUserEdit } from "react-icons/tb";

export default function Signup() {
  return (
    <>
    <div >

      <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center  "
        style={{ backgroundImage: `url(${Thumbnail})` }}
        >
    <div className='bg-transparent text-primary z-10 mt-10'>
          <h1 className='font-bold text-center text-3xl mb-2 bg-transparent'>
            Cultivating Knowledge, Growing Success
          </h1>
          <h2 className='font-bold text-center mb-4 bg-transparent'>
            Create an Account to Explore, Discover and Implement!
          </h2>
    </div>
    <div className=' flex justify-center'>

        <div className='  m-4 p-8 rounded-lg bg-white'>
          <h2 className='text-center font-bold text-xl mb-4'>Sign in</h2>
          <form>
            <div className='flex flex-col items-center justify-center '>
                <div className='flex space-x-2 '>
              <div className='mb-4  '>
                <label htmlFor="email" className='block mb-1 font-bold'>First Name:</label>
              <div className='flex relative'>
              <CiUser className='absolute text-2xl block left-2 top-1/2 transform -translate-y-1/2'/>
                <input
                  type="name"
                  name="name"
                  id="name"
                  className='border w-96 p-2 pl-10'  
                  placeholder='Enter Your Name'
                  required
                  />
                  </div>
              </div>

              <div className='mb-4  '>
                <label htmlFor="email" className='block mb-1 font-bold'>Last Name:</label>
              <div className='flex relative'>
              <TbUserEdit className='absolute text-2xl block left-2 top-1/2 transform -translate-y-1/2'/>
                <input
                  type="lname"
                  name="lname"
                  id="lname"
                  className='border w-96 p-2 pl-10'  
                  placeholder='Enter Your Surname'
                  required
                  />
                  </div>
                 </div>
                </div>

                <div className='flex space-x-2'>

              <div className='mb-4  '>
                <label htmlFor="email" className='block mb-1 font-bold'>Email:</label>
              <div className='flex relative'>
              <CiMail className='absolute text-2xl block left-2 top-1/2 transform -translate-y-1/2'/>
                <input
                  type="email"
                  name="name"
                  id="name"
                  className='border w-96 p-2 pl-10'  
                  placeholder='Enter you email'
                  required
                  />
                  </div>
              </div>
              <div className='mb-4  '>
                <label htmlFor="email" className='block mb-1 font-bold'>Phone Number:</label>
              <div className='flex relative'>
              <FaPhoneAlt className='absolute text-2xl block left-2 top-1/2 transform -translate-y-1/2'/>
                <input
                  type="number"
                  name="name"
                  id="name"
                  className='border w-96 p-2 pl-10'  
                  placeholder='Enter you number'
                  required
                  />
                  </div>
              </div>
                  </div>

                  <div className='flex space-x-2'>
              <div className='mb-4  '>
                <label htmlFor="gender" className='block mb-1 font-bold'>Gender:</label>
              <div className='flex relative'>
               <select name="gender" id="gender" className='m-2 p-1 w-96'>
                <option value="male" >Male</option>
                <option value="male">Female</option>
               </select>
                  </div>
              </div>
              <div className='mb-4  '>
                <label htmlFor="gender" className='block mb-1 font-bold'>Role:</label>
              <div className='flex relative'>
               <select name="role" id="role" className='m-2 p-1 w-96'>
                <option value="male" >Learner</option>
                <option value="male" >Educator</option>
                <option value="male">Organizer</option>
               </select>
                  </div>
              </div>
                  </div>
              
              <div className='flex space-x-2'>
              <div className='mb-4 '>
                <label htmlFor="password" className='block mb-1 font-bold'>Password:</label>
                <div className='flex relative'>
                  <RiLockPasswordLine className='absolute left-2 text-2xl top-1/2 transform -translate-y-1/2'/>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className='border w-96 p-2 pl-10'
                  placeholder='Enter your password'
                  required
                  />
                  </div>
              </div>
              <div className='mb-4 '>
                <label htmlFor="password" className='block mb-1 font-bold'>Confirm Password:</label>
                <div className='flex relative'>
                  <RiLockPasswordLine className='absolute left-2 text-2xl top-1/2 transform -translate-y-1/2'/>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  className='border w-96 p-2 pl-10'
                  placeholder='Enter your password'
                  required
                  />
                  </div>
              </div>
                  </div>

             
              <button type='submit' className='border w-96 m-2 p-2 bg-accent text-white hover:text-accent hover:bg-primary'>
               Create New Account
              </button>
              
            </div>
            <div className='flex flex-col justify-center items-center'>
            <p>Already have an account? <Link to='/login' className='text-accent hover:text-primary'>Login</Link></p>
            <p className='  border-accent p-2'>OR</p>
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
