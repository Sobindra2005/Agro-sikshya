import React from 'react'

export default function Createvideo() {
  return (
    <>
    <div>
        <form className='space-y-5'>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="title" className='text-xl'>Title</label>
                <input type="title" name="title" id="title"  className='border border-accent pl-2' placeholder='Enter title '/>
            </div>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="description"  className='text-xl'>Description</label>
                <textarea name="description" id="description" className='border border-accent pl-2' placeholder='Write Description'></textarea>
            </div>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="description"  className='text-xl '>Upload Video</label>
                <input type="file" id='video' name='video' accept='video/*' />
            </div>
            <input type="submit" value="submit" className='border p-2 bg-accent rounded-xl px-4 text-white hover:bg-fourth ' />
        </form>
    </div>
    </>
  )
}
