import React from 'react'
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { HiMiniUsers } from "react-icons/hi2";
import { TbUsersPlus } from "react-icons/tb";
import { GiNetworkBars } from "react-icons/gi";
import Course from './course';
import Task from './task';
import Daily from './daily';
export default function Dashboard() {
    let datas = [ 
        {
            id:1,
            icon:<FaMoneyCheckDollar/>,
            title:"Today's Money",
            number:"$53k",
            percentage:"55%",
            value:"+",
            time:"than last week",
        },
        {
            id:2,
            icon:<HiMiniUsers/>,
            title:"Today's Users",
            number:"2,300",
            percentage:"3%",
            value:"+",
            time:"than last month",
        },
        {
            id:3,
            icon:<TbUsersPlus/>,
            title:"New Clients",
            number:"3367",
            percentage:"2%",
            value:"-",
            time:"than yesterday",
        },
        {
            id:4,
            icon:<GiNetworkBars/>,
            title:"Today's Money",
            number:"$105,207",
            percentage:"55%",
            value:"+",
            time:"than last week",
        },
    ]
  return (
    <>
    <div className='p-4 '>
        <div className='flex justify-between m-2 '>
            {
                datas.map((data=>{
                    let {id, icon,title,number, percentage,value,time}= data;
                    return<>
                    <div  key={id} className='bg-purewhite border rounded-xl p-1'>

                    <div className='flex m-2 p-2 justify-between  items-center'>
                        <p className='border bg-secondary rounded-xl m-2 p-2 text-4xl'>{icon}</p>
                        <div className='flex flex-col ml-10'>
                        <h2 className='text-fourth text-md'>{title}</h2>
                        <p className='font-bold text-2xl'>{number}</p>
                     </div>
                        
                        </div>
                        <hr />
                     <div className='flex justify-center'>
                        <p className={`${value === '+' ? 'text-accent' : 'text-red-600'} font-bold mr-1 ` }>{value}{percentage}</p>
                        <p>{time}</p>
                    </div>

                    </div>
                    </>
                }))
            }
        </div>
        <div className='flex flex-row justify-center space-x-4'>
        <Course/>
        <Task/>
        <Daily/>
        </div>

    </div>
    </>
  )
}
