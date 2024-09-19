import React from 'react'
import User1 from '../../assets/user/user1.svg'
import User2 from '../../assets/user/user2.svg'
import { FaChevronDown } from "react-icons/fa";

export default function Starting() {
    let users = [
        {
            id:1,
            image:User1,
            title:"Best plants to start with?",
            name:"Jane Smith",
            time:"3 hours ago"
        },
        {
            id:2,
            image:User2,
            title:"Urban Farming for Beginners",
            name:"Bob Brown",
            time:"5 days ago"
        }
    ]
  return (
    <>
    <div>
        <h3 className='text-2xl text-fifth'>Starting Out</h3>
        <div className='bg-secondary flex flex-col space-y-5 relative m-5 rounded-xl'>
            {
                users.map((user)=>{
                    let {id, image,title,name,time} = user;
                    return <>
                    <div className='flex space-x-2 m-2 p-2'>
                    <img src={image} alt="" className='h-12' />
                    <div className='flex flex-col ml-3'>
                    <h5 className='font-bold text-xl '>{title}</h5>
                    <p className='text-sm'>{time} by {name}</p>
                    </div>
                    </div>
                    <button className='border rounded-xl p-2 bg-third hover:bg-secondary hover:text-white flex justify-center items-center absolute right-[40%] bottom-2'>View More<FaChevronDown className='text-fourth'/></button>
                  
                    </>
                })
            }
        </div>
    </div>
    </>
  )
}