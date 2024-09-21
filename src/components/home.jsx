import React from 'react'
import A from '../assets/thumbnail/1.jpg'
import Fertilizer from '../assets/ads/fertilizer.jpg'
import { FaBookOpen,FaUsers } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { VscGraph } from "react-icons/vsc";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

export default function Home() {
  return (
    <>
    <div className=' w-full'>
        <img src={A} alt="" className='w-full object-cover object-center h-full' />

        <div className='fixed top-0 right-0 left-56 bottom-0 '>
          <marquee className='bg-accent' behavior="loop" direction="right"> If you're thinking of getting into farming, talk to the experts. | के तपाईं खेतीमा केहि गर्ने सोचमा हुनुहुन्छ भने, विज्ञहरूसँग कुरा गर्नुहोस् ।</marquee>
        </div>
        <div className='absolute top-44 left-10'>
          <h4 className='text-5xl mb-4 p-1 text-primary font-bold'>Agro-Sikshya</h4>
          <h4 className='text-3xl text-fifth'>तपाईं कृषि उत्साही हुनुहुन्छ कि तपाईंले बाली उमार्ने तरिका जान्न चाहनुहुन्छ? हामीसँग तपाईंलाई आवश्यक सबै कुरा छ!</h4>
          <div>
          <ul className=' space-x-10 m-5 p-5 font-bold flex'>
             <li ><Link to='/courses'className='flex ml-2 border bg-accent hover:text-white p-3 rounded-xl text-sm text-primary hover:text-accent items-center '><FaBookOpen className='mr-2'/>Course</Link></li>
             <li ><Link to='/bussinessplan'className='flex ml-2 border bg-accent hover:text-white p-3 rounded-xl text-sm text-primary hover:text-accent items-center '><VscGraph className='mr-2'/>Business Planner</Link></li>
             <li ><Link to='/market'className='flex ml-2 border bg-accent hover:text-white p-3 rounded-xl text-sm text-primary hover:text-accent items-center '><BsGraphUpArrow className='mr-2'/>Market Trend</Link></li>
             <li ><Link to='/community 'className='flex ml-2 border bg-accent hover:text-white p-3 rounded-xl text-sm text-primary hover:text-accent items-center '><FaUsers className='mr-2'/>Community Forum</Link></li>
        </ul>
          </div>
        </div>
        <div className='absolute bottom-24 right-52 left-8'>
          <p>नेपालको कृषि क्षेत्र समृद्धि र विकासका लागि महत्त्वपूर्ण छ, तर यहाँका चुनौतीहरू विकासमा बाधक बनेका छन्। नेपालको भौगोलिक विविधता र जलवायुले विभिन्न प्रकारका बाली उत्पादनको अवसर प्रदान गर्छ, तर साना किसानहरूको पारंपरिक कृषि प्रणाली, सीमित प्रविधि प्रयोग, र पर्याप्त लगानीको अभावले कृषि उत्पादनलाई प्रभावित गरेको छ। साथै, बाढी र भूस्खलन जस्ता प्राकृतिक विपत्तिहरूले पनि कृषि क्षेत्रमा धक्का पुर्याएका छन्। यी सबै कारणहरूले गर्दा हामी कृषि क्षेत्रमा पूर्ण क्षमता हासिल गर्न सकेका छैनौं। विकास र आधुनिकता तर्फको प्रयासले मात्र यो क्षेत्रलाई समृद्ध बनाउन सक्छ।</p>
          <br />
          <p>हामीले यही समस्या समाधान गर्नको लागि "एग्रो-शिक्ष्या" प्रस्तुत गरेका छौँ। एग्रो-शिक्ष्या कृषि प्रविधिहरूको उपयोग, बाली उत्पादनका नयाँ तरिकाहरू, र साना किसानहरूलाई आवश्यक ज्ञान र स्रोतहरू प्रदान गर्नमा केन्द्रित छ। यस कार्यक्रमद्वारा, हामी किसानहरूको उत्पादनशीलता बढाउने, आधुनिक खेतीका तरिकाहरू सिकाउने, र कृषि क्षेत्रमा समग्र विकासमा योगदान गर्ने लक्ष्य राख्छौँ। हामी विश्वास गर्छौँ कि शिक्षा र प्रविधिको सही मिश्रणले नेपालको कृषि क्षेत्रलाई नयाँ उचाईमा पुर्याउन सक्छ।</p>
        </div>
        <div className='h-[270px] w-[200px] bg-purewhite absolute bottom-10 right-0'>
          <img src={Fertilizer} alt="" />
        </div>
    </div>
    
    </>
  )
}
