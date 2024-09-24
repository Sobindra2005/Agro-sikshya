import React, { useState } from 'react';

const SoilDataFetcher = () => {
  const [soilData, setSoilData] = useState(null);
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [accessToken, setAccessToken] = useState(''); 

  const fetchSoilData = async () => {
    try {
      const response = await fetch(`http://localhost:5174/soil/soildata/?lon=${lon}&lat=${lat}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`, // Use the access token from state
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setSoilData(data);
    } catch (error) {
      console.error('Error fetching soil data:', error);
    }
  };
}  

export default SoilDataFetcher;
