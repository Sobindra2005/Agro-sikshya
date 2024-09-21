import React from 'react';
import Datas from './datas';
import { useParams } from 'react-router-dom';

export default function Player() {
  const { id } = useParams(); // Extract the id from the URL

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

  // Destructure the title, url, and description from the item
  const { title, url, description } = item;

  return (
    <div className="container mx-auto p-6 h-full ">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <iframe 
        src={url} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="h-[500px] w-[1000px]"
      ></iframe>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
