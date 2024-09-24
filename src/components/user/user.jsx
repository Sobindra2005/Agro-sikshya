import React, { useEffect, useState } from 'react'
import A from '../../assets/img30.png'
import Dragon from '../../assets/saveduser/dragon.svg'
import Organic from '../../assets/saveduser/organic.svg'
import Pie from '../../assets/saveduser/piechart.svg'
import Bar from '../../assets/saveduser/bargraph.svg'
import Badge1 from '../../assets/badges/img1.svg'
import Badge2 from '../../assets/badges/img2.svg'
import Badge3 from '../../assets/badges/img3.svg'
import Badge4 from '../../assets/badges/img4.svg'
import { CiLock } from "react-icons/ci";
// import Dashboard from './dashboard'
import { GetCurrentUser } from '../../appwrite/service'
import { WithArgumentAndParameter } from '../../appwrite/crud'

export default function User() {

  const [userData, setuserData] = useState([])

  console.log(userData)

  const getdata = async () => {
    const responce = await GetCurrentUser()
    const data = await WithArgumentAndParameter("66f0d73a000eab1810f8", "email", responce.email)
    setuserData(data);
  }

  useEffect(()=>{
    getdata();
  },[])


  let datas = [
    {
      title: "Organic Green leaf",
      date: "Jan 5, 2023",
      status: "In Progress",
      image: Dragon
    },
    {
      title: "Organic Green leaf",
      date: "Jan 5, 2023",
      status: "In Progress",
      image: Organic
    },

  ]

if(!userData){
  return <h1>LOading.......</h1>
}

  return (
    <>

      <div className='bg-purewhite p-4 border border-black mt-5'>
        <h2 className='text-xl'> User Profile</h2>
        <div className='flex m-2 sm:space-x-4 flex-col sm:flex-row'>
          <img src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1706867365.jpg" alt="" className='w-24  h-24 object-cover rounded-full  object-center' />
          <div>
            <h3 className='font-bold text-xl'>{!!userData ? `${userData[0]?.firstName} ${userData[0]?.lastName}` : 'Hari Khatri'}</h3>
            <p> {userData[0]?.email} </p>
            <br />
            <p>Passionate about urban planning and sustainable design.</p>
          </div>
          <hr />
          <div>
            <h4 className='font-bold'>Badges & Achievements</h4>
            <div className='flex flex-row m-2  p-2 space-x-4  items-center relative '>
              <div className='relative'>
                <img src={Badge1} className='h-20  opacity-25' alt="" />
                <span className='absolute top-8 left-3 sm:left-8 '><CiLock /></span>
              </div>
              <div className='relative'>
                <img src={Badge2} className='h-24  opacity-25' alt="" />
                <span className='absolute top-10 sm:top-10 left-5 sm:left-10  '><CiLock /></span>
              </div>
              <div className='relative'>
                <span className='absolute top-4 sm:top-8 left-5 sm:left-10'><CiLock /></span>
                <img src={Badge3} className='w-24 opacity-25' alt="" />
              </div>
              <div className='relative'>
                <img src={Badge4} alt="" className='w-20  ' />
                <span className='absolute top-3 sm:top-8 left-3 sm:left-8'><CiLock /></span>
              </div>
            </div>
          </div>
        </div>
        <div className='m-5'>
          <h2 className='text-center text-2xl m-2'>Saved Projects</h2>
          <div className='flex flex-col space-y-10'>
            {
              datas.map((data) => {
                let { title, date, status, image } = data;
                return <>
                  <div className='flex flex-col sm:flex-row sm:space-x-10  items-center '>
                    <img src={image} alt="" />
                    <div className='border m-2 p-2'>
                      <h3 className='font-bold'>{title}</h3>
                      <p className='text-primary'>{date}</p>
                      <p className='text-primary'>{status}</p>
                      <button className='border m-1 p-1 pl-2 rounded-sm pr-2 border-fifth  hover:ring-2'>Edit</button>
                    </div>
                  </div>
                </>
              })
            }
          </div>
        </div>
      </div>
      <div className='bg-purewhite m-2 p-2 hidden'>
        <h4 className='font-bold text-2xl'>Forum Activity</h4>

        <div className='flex m-2 justify-center'>

          <div className='flex border m-2 p-2'>
            <div className='mr-20'>
              <h5>Posts</h5>
              <p className='text-3xl font-bold'>45</p>
              <p className='text-red-600'>30%</p>
            </div>
            <img src={Pie} alt="" />
          </div>
          <div className='flex m-2 p-2 border'>
            <div className='mr-20 '>

              <h5>Comments</h5>
              <p className='text-3xl font-bold'>120</p>
              <p className='text-red-600'>50%</p>
            </div>
            <img src={Bar} alt="" />
          </div>
          <div className='flex  border m-2 p-2'>
            <div className=' mr-20'>
              <h5>Likes</h5>
              <p className='text-3xl font-bold'>200</p>
              <p className='text-accent'>70%</p>
            </div>
            <img src={Bar} alt="" />
          </div>
        </div>
        {/* <Dashboard /> */}
      </div>
    </>
  )
}
