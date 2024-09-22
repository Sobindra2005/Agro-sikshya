import React from 'react'
import image from '../../assets/img30.png';

import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
    <div className='flex justify-end'>
      <img src={image} alt="" />
    </div>
    </>
  )
}
