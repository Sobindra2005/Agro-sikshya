import React ,{useState} from 'react';
import A from '../assets/thumbnail/1.jpg';
import Fertilizer from '../assets/ads/fertilizer.jpg';
import { FaBookOpen } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Search from './search';

export default function Home() {

  
  return (
    <>
      <div className='w-full relative bg-cover' style={{ backgroundImage: `url(${A})` }}>
        <div className='flex flex-col items-center justify-center text-center h-screen bg-black bg-opacity-60'> 
          <h4 className='text-3xl   sm:text-5xl font-bold text-white shadow-lg mb-10'>के तपाईं कृषिमा रुचि राख्नुहुन्छ?</h4>   
            <Search   />   
          <div>
            <ul className='space-x-10 sm:m-5 sm:p-5 font-bold flex'>
              <li className='flex space-x-5'> 
                <Link to='/courses' className='flex ml-2 border bg-accent hover:text-white p-1 sm:p-3 rounded-xl text-sm text-primary items-center'>
                  <FaBookOpen className='mr-2' />Courses
                </Link>
                <Link to='/courses' className='flex ml-2 border bg-accent hover:text-white p-3 rounded-xl text-sm text-primary items-center'>
                  <FaBookOpen className='mr-2' />Agro-products
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </>
  );
}
