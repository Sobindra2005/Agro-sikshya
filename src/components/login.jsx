import React from 'react'

export default function Login() {
  return (
    <>
    <div className='m-2'>
        <h2>Sign in</h2>
        <form action="" className='flex'>
          <label htmlFor="email">Email:</label>
          <input type="email" name="name" id="name" className='border'/>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" className='border' />
          <button type='submit' className='border w-96'>Sign in </button>
        </form>
    </div>
    </>
  )
}
