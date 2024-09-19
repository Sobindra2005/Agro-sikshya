import React from 'react'
import A from '../../assets/image30.png'
import { CiSearch } from "react-icons/ci";
import Starting from './starting';
import Createpost from './createpost';
import Tips from './tips';
import Sucess from './sucess';
import Communitypost from './community-post';
export default function Home() {
  return (
    <>
  <div>

    <div className='flex justify-between'>
      <h6 className='font-bold'>Community Forum</h6>
      <div className='flex space-x-2'>
        <div className='flex justify-center items-center  '>
        <input type="search" name="" id="" className='border bg-secondary rounded-xl p-1  ' placeholder='Search topics..' />
        <button>  <CiSearch className='border text-3xl rounded-sm p-1 bg-secondary'/></button>
        </div>
        <img src={A} alt="" className='h-16' />
      </div>
    </div>
    <div>
      <Createpost />
      <Communitypost />
      <Starting />
      <Tips />
      <Sucess />
    </div>
  </div>
    </>
  )
}
