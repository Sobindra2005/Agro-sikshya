import React from 'react'
import A from '../../assets/img30.png'
import { CiSearch } from "react-icons/ci";
import Starting from './starting';
import Createpost from './createpost';
import Tips from './tips';
import Sucess from './sucess';
import Communitypost from './community-post';
import emailjs from 'emailjs-com';
import { useState } from 'react';

export default function Community() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    problem: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();


    emailjs.send(
      'service_vke3tog',    // Replace with your EmailJS service ID
      'template_7l8lmuj',   // Replace with your EmailJS template ID
      formData,             // Form data as email content
      'NSzYLrEbvDfYpRAoh'        // Replace with your EmailJS user ID
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Your problem request has been sent!');
    }, (error) => {
      console.error('Error sending email:', error.text);
      alert('Failed to send the request. Please try again.');
    });
  };


  return (
    <>
      <div className='mt-8 '>

        <div className='flex justify-between'>
          <h6 className='font-bold text-xl ml-3'>विज्ञहरूको सँग सल्लाह</h6>
          <div className='flex px-6 space-x-2'>
            <div className=' justify-center items-center  hidden'>
              <input type="search" name="" id="" className='border bg-secondary rounded-xl p-1  ' placeholder='Search topics..' />
              <button>  <CiSearch className='border text-3xl rounded-sm p-1 bg-secondary' /></button>
            </div>
          </div>
        </div>
        <div className='flex justify-center m-2 '>

          <div className='sm:w-[60%]  ' >
        <Createpost formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />   <Communitypost />
          </div>

          <div className='sm:ml-6 pl-2 border-l border-gray-300 w-[40%] hidden sm:block '> 
            <Starting />
            <Tips />
            <Sucess />
          </div>
        </div>
      </div>
    </>
  )
}
