import React from 'react'
import A from '../assets/thumbnail/1.jpg'
import Fertilizer from '../assets/ads/fertilizer.jpg'
export default function Home() {
  return (
    <>
    <div className='relative'>
        <img src={A} alt="" />

        <div className='absolute top-0 right-0 left-0 bottom-0'>
          <marquee className='bg-purewhite' behavior="loop" direction="right"> If you're thinking of getting into farming, talk to the experts. | के तपाईं खेतीमा केहि गर्ने सोचमा हुनुहुन्छ भने, विज्ञहरूसँग कुरा गर्नुहोस् ।</marquee>
        </div>
        <div className='h-[270px] w-[200px] bg-purewhite absolute bottom-10 right-0'>
          <img src={Fertilizer} alt="" />
        </div>
    </div>
    
    </>
  )
}
