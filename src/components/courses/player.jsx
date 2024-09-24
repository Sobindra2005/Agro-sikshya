import React from 'react';
import Datas from './datas';
import { useParams } from 'react-router-dom';
import Agro from '../../assets/ads/agro.jpg';
import Review from './review';
import ReviewForm from './writereview';
import { FaCheck } from "react-icons/fa";
// import Mcq from './mcq';
export default function Player() {
  const { id } = useParams(); 

  // Find the video data by matching the id
  const item = Datas.find((item) => item.id === id);

  // If no item is found, display a "not found" message
  if (!item) {
    return (
      <div>
        <h1>VIDEO not found</h1>
      </div>
    );
  }

  const { features, title, url, description } = item;

  return (
    <>
      <div className="container mx-auto p-6 h-full">
        <h1 className="text-3xl font-bold mb-4 mt-4">{title}</h1>

        <div className='border sm:m-10 sm:p-10 p-4 m-2 sm:mr-96 rounded-md space-y-10 '>

       <h2 className='text-xl m-2 font-bold'>यहाँ भिडियोको मुख्य बुँदाहरू छन्:</h2>
        <ul className="list-disc list-inside mb-4 space-y-5">
          {Array.isArray(features) && features.length > 0 ? (
            features.map((feature, index) => (
              <li key={index} className="mb-2 list-none flex mx-2 items-center gap-3">
                <FaCheck/>{feature}
              </li>
            ))
          ) : (
            <li>No features available.</li>
          )}
        </ul>
          </div>
          <iframe
  src={`${url}?autoplay=0&loop=0&controls=1`}
  allow="accelerometer; autoplay=0; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="sm:h-[500px] sm:w-[1000px] mb-4"
></iframe>

        <p className="text-gray-700">{description}</p>
      </div>
      
      <h4 className='text-center font-bold text-2xl'>के तपाईंलाई बीउ आवश्यक छ?</h4>
      <div className='flex flex-col sm:flex-row sm:h-52 space-y-4 sm:space-x-12 justify-center m-2'>
        <img src={Agro} alt="Agro Ad" />
        <img src={Agro} alt="Agro Ad" />
        <img src={Agro} alt="Agr o Ad" />
        <img src={Agro} alt="Agro Ad" />
      </div>
      
      <Review />
      <ReviewForm />
      {/* <Mcq/> */}
    </>
  );
}
