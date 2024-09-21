import React from 'react';
import Datas from './datas';
import { Link } from 'react-router-dom';
export default function Courses() {
    const handleClick=()=>{
        window.scrollTo(0,0);
      }
      
  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Datas.map((item) => {
            return (
              <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
                <Link to={`/courses/player/${item.id}`} onClick={handleClick}>
                <iframe 
                  src={item.url} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-48 rounded-md mb-4"
                  ></iframe>
              
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-xl font-semibold mb-2">{item.username}</p>
          </Link>
              </div>
            );
          })}
        </div>
      </div>
      </>
    );
}
