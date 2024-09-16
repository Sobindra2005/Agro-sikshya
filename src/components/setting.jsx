import React from 'react'
import Login from './auth/login'
import { Link } from 'react-router-dom'
import Signup from './auth/signup';
export default function Setting() {
  return (
    <>
    <div className='flex justify-center items-center flex-col space-y-10'>
       <h3 className='font-bold text-2xl '>Setting</h3>
       <div className='m-2 flex flex-row items-center space-x-5 font-bold' >
        <h5 className='border  rounded-md p-2 bg-accent'>User Auth</h5>
        <div className='space-y-4'>   
        <p><Link to='/login' className='text-primary hover:text-accent '>Login</Link></p>
        <p><Link to='/signup' className='text-primary hover:text-accent '>Signup</Link></p>
        </div>
       </div>
    </div>
    </>
  )
}
