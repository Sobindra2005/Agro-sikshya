import React from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <>
    <div className='  list-none space-y-10 m-2 p-2'>
        <li><Link to='/'> General</Link></li>
        <li><Link to='/'> Plan</Link></li>
        <li><Link to='/'> Billing</Link></li>
    </div>
    </>
  )
}
