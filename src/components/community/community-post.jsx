import React from 'react'

export default function Communitypost() {
    let datas = [
        {
            title:" General Discussion",
            description:"Everything related to farming and agriculture"
        },
        {
            title:" Crop Management",
            description:"Share tips and tricks on managing your crops effectively"
        },
        {
            title:" Livestock Care",
            description:"Discuss best practices for talking care of your livestock"
        },
    ]
  return (
    <>
    <div>
        <h1 className='text-2xl m-2'>Community Post</h1>
        <div className='flex space-x-4 m-4 '>
            {
                datas.map((data)=>{
                    let { title, description} = data;
                    return<>
                    <div className='bg-secondary p-2 items-center justify-center border rounded-xl w-96'>
                    <h5 className='text-xl'>{title}</h5>
                    <p className='text-sm'>{description}</p>
                    </div>
                    </>
                })
            }
        </div>
    </div>
    </>
  )
}
