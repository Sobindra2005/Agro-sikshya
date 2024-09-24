import React from 'react'
import User1 from '../../assets/user/user5.svg'
import User2 from '../../assets/user/user6.svg'
import { FaChevronDown } from "react-icons/fa";

export default function Sucess() {
    let users = [
        {
            id:1,
            image:User1,
            title:"Turning a hobby into a business",
            name:"Jane Smith",
            time:"3 hours ago"
        },
        {
            id:2,
            image:User2,
            title:"From balcony to rooftop: My urban farming journey",
            name:"Bob Brown",
            time:"5 days ago"
        }
    ]
  return (
    <>
    <div>
        <h3 className='text-2xl text-fifth'>Success Stories</h3>
        <div className='bg-secondary border border-gray-700 flex flex-col space-y-5 relative m-5 rounded-xl'>
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
                   
                  
                    </>
                })
            }
        </div>
        </div>
    </>
  )
}
