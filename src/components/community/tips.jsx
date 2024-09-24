import React from 'react'
import User1 from '../../assets/user/user3.svg'
import User2 from '../../assets/user/user4.svg'
import { FaChevronDown } from "react-icons/fa";

export default function Tips() {
    let users = [
        {
            id:1,
            image:User1,
            title:"How to maximize small spaces",
            name:"Jane Smith",
            time:"3 hours ago"
        },
        {
            id:2,
            image:User2,
            title:"Watering techniques for container gardens",
            name:"Bob Brown",
            time:"5 days ago"
        }
    ]
  return (
    <>
    <div>
        <h3 className='text-2xl text-fifth'>Tips & Tricks</h3>
        <div className='bg-secondary border border-gray-700 flex flex-col space-y-5  py-2 relative m-5 rounded-xl'>
            {
                users.map((user)=>{
                    let {id, image,title,name,time} = user;
                    return <>
                    <div className='flex   space-x-2 m-2 p-2'>
                    <img src={image} alt="" className='h-12' />
                    <div className='flex flex-col ml-3'>
                    <h5 className='font-bold text-xl '>{title}</h5>
                    <p className='text-sm'>{time} by {name}</p>
                    </div>
                    </div>
                 
                    </>
                })
            }
        </div>
        </div>
    </>
  )
}
