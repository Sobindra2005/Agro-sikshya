import React, { useState } from 'react';
import Datas from './provineceAndSeasonalCrops';
import { Link } from 'react-router-dom';
import Barley from '../../assets/crops-image/Barley.jpg';
import Cardamom from '../../assets/crops-image/Cardamom.jpg';
import Corn from '../../assets/crops-image/Corn.jpg';
import Millet from '../../assets/crops-image/Millet.jpg';
import Potato from '../../assets/crops-image/potato.jpg';
import Tea from '../../assets/crops-image/tea.jpg';
import Vegetables from '../../assets/crops-image/vegetables.jpg';
import Wheat from '../../assets/crops-image/wheat.jpg';
import Rice from '../../assets/crops-image/rice.jpg';
import Sugarcane from '../../assets/crops-image/sugarcare.jpg';
import Apple from '../../assets/crops-image/apple.jpg';
import Buckwheat from '../../assets/crops-image/Buckwheat.jpg';
import Citrus from '../../assets/crops-image/Citrus.jpg';
import Mustard from '../../assets/crops-image/mustard.jpg';
import Coffee from '../../assets/crops-image/coffee.jpg';
import Pulse from '../../assets/crops-image/Pulse.jpg';
import Orange from '../../assets/crops-image/orange.jpg';
import Tomato from '../../assets/crops-image/tomato.jpg';
import Cauliflower from '../../assets/crops-image/cauliflower.jpg';

// Create a mapping of crop names to their respective images
const cropImages = {
  "Barley": Barley,
  "Cardamom": Cardamom,
  "Maize": Corn,
  "Millet": Millet,
  "Potato": Potato,
  "Tea": Tea,
  "Vegetables": Vegetables,
  "Wheat": Wheat,
  "Rice": Rice,
  "Sugarcane": Sugarcane,
  "Apples": Apple,
  "Buckwheat": Buckwheat,
  "Citrus": Citrus,
  "Mustard": Mustard,
  "Coffees": Coffee,
  "Pulses": Pulse,
  "Oranges": Orange,
  "Tomato": Tomato,
  "Cauliflower": Cauliflower,
  // Add more crops and their corresponding images as needed
};

export default function Region() {
  const [selectedProvince, setSelectedProvince] = useState(Datas.provinces[0]);
  const [selectedSeason, setSelectedSeason] = useState(selectedProvince.seasonalCrops[0]);

  const handleProvinceChange = (e) => {
    const province = Datas.provinces.find(p => p.name === e.target.value);
    setSelectedProvince(province);
    setSelectedSeason(province.seasonalCrops[0]); // Reset to the first seasonal crop
  };

  const handleSeasonChange = (e) => {
    const season = selectedProvince.seasonalCrops.find(s => s.season === e.target.value);
    setSelectedSeason(season);
  };

  return (
    <div className='flex flex-col m-2 p-2 mt-10'>
      <h1 className='text-center text-2xl'>Location-Based Crop Finder</h1>
      <p className='text-center'>Choose your location and find out what is best for your location.</p>
      <form className='flex flex-col justify-center m-4'>
        <div className='m-2 p-2'>
          <label htmlFor="province">Province</label>
          <select 
            name="province" 
            id="province" 
            className='border rounded-md p-2 sm:ml-2' 
            onChange={handleProvinceChange}
            value={selectedProvince.name}
          >
            {Datas.provinces.map((province) => (
              <option key={province.name} value={province.name}>
                {province.name}
              </option>
            ))}
          </select>
        </div>

        {/* Display the seasonal crops for the selected province */}
        <div className='m-2 p-2'>
          <label htmlFor="season">Season</label>
          <select 
            name="season" 
            id="season" 
            className='border w-56 rounded-md p-2 sm:ml-2 mr-2' 
            onChange={handleSeasonChange}
            value={selectedSeason.season}
          >
            {selectedProvince.seasonalCrops.map((season) => (
              <option key={season.season} value={season.season}>
                {season.season}
              </option>
            ))}
          </select>
        </div>
      </form>

      {/* Display selected crops with their images */}
      <div className='m-2 p-2'>
          <h2 className='text-lg'>Crops for {selectedSeason.season}:</h2>
        <ul>
          {selectedSeason.crops.map(crop => (
            <li key={crop} className='border rounded-xl p-2 m-2 sm:m-10 flex bg-white items-center'>
              <div className='flex flex-col sm:flex-row m-2 p-2 items-center'>
                {cropImages[crop] && <img src={cropImages[crop]} alt={crop} className='w-44 object-cover sm:ml-4 rounded-xl' />}
                <div className='m-2 p-2'>
                  <span className='font-bold ml-2 text-primary text-xl'>{crop}</span>
                  <p className='text-xl p-2'>{crop} कसरी बढाउने बारे जान्नुहोस् </p>
                  <div className='flex'>
                    {/* Use the crop variable here */}
                    <Link to={`/regional-crops/Tomato`} > 
                      <p className='border p-2 rounded-xl text-white bg-accent hover:bg-fourth'>More Detail</p>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
