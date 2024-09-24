import React from 'react'
import { IoMdImage, IoMdLink } from "react-icons/io";
import { IoText } from "react-icons/io5";
import { MdPreview } from "react-icons/md";

export default function Createpost({ handleSubmit, formData ,setFormData}) {
  return (
    <>
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div className='w-full'>
        <h3 className='font-semibold text-lg mt-5 '></h3>
        <div>
          <div className='flex flex-col sm:flex-row sm:gap-x-9  mb-3 gap-3'>
            <input className='sm:w-full border rounded-md outline-black  border-black p-2 text-lg' value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder='Enter the Name' type="text" name="Name" id="name" />
            <input className='sm:w-full border rounded-md  outline-black border-black p-2 text-lg' value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder='Enter the Email' type="text" name="email" id="email" />
          </div>
          <textarea id="message" rows="4" class="block outline-black p-2.5 w-full text-lg   rounded-lg border border-fourth  " placeholder="Write your thoughts here..." value={formData.problem}
            onChange={(e) => setFormData({ ...formData, problem: e.target.value })}></textarea>
          <div className='flex justify-between'>
            <div className='sm:flex space-x-3 m-2 hidden'>
              <button className='border rounded-md hover:bg-gray-100  p-2  flex items-center'><IoMdImage className='mr-1' />Add Image</button>
              <button className='border rounded-md hover:bg-gray-100  p-2  flex items-center'><IoMdLink className='mr-1' />Add Link</button>
              <button className='border rounded-md hover:bg-gray-100  p-2  flex items-center'><IoText className='mr-1' />Formal Text</button>
              <button className='border rounded-md hover:bg-gray-100  p-2  flex items-center'><MdPreview className='mr-1' />Add Preview</button>
            </div>
            <div className='space-x-2 m-2 flex justify-end'>
              <button className=' border  border-gray-200 hover:bg-gray-100  rounded-md p-1 w-20 text-black'>Cancel</button>
              <button type='submit' className=' border border-gray-200 hover:bg-gray-100  rounded-md p-1 w-16 text-black  '>Post</button>
            </div>
          </div>
        </div>
      </div>
      </form>
      <hr />
    </>
  )
}
