import React from 'react'
import { IoMdImage,IoMdLink } from "react-icons/io";
import { IoText } from "react-icons/io5";
import { MdPreview } from "react-icons/md";

export default function Createpost() {
  return (
    <>
    <div>
        <h3 className='font-bold text-2xl'>Create a Post</h3>
        <div>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm  bg-secondary rounded-lg border border-fourth focus:ring-third focus:border-fourth " placeholder="Write your thoughts here..."></textarea>
        <div className='flex justify-between'>
            <div className='flex space-x-3 m-2'>
            <button className='border rounded-xl hover:bg-third  p-2 bg-secondary flex items-center'><IoMdImage className='mr-1'/>Add Image</button>
            <button className='border rounded-xl hover:bg-third  p-2 bg-secondary flex items-center'><IoMdLink className='mr-1'/>Add Link</button>
            <button className='border rounded-xl hover:bg-third  p-2 bg-secondary flex items-center'><IoText className='mr-1'/>Formal Text</button>
            <button className='border rounded-xl hover:bg-third  p-2 bg-secondary flex items-center'><MdPreview className='mr-1'/>Add Preview</button>
            </div>
            <div className='space-x-2 m-2'>
                <button className='bg-accent border hover:bg-third  rounded-xl p-1 w-20 text-white'>Cancel</button>
                <button className='bg-accent border hover:bg-third  rounded-xl p-1 w-16 text-white  '>Post</button>
            </div> 
        </div>
        </div>
    </div>
    <hr />
    </>
  )
}
