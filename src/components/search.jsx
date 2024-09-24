import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const suggestionsList = [
  { title: 'बाख्रा पालेर विदेशसरह कमाइ गर्दै विजय राई l Goat Farming Success Story | Nepal Farkeypachi', link: '/courses/player/goat-farming' },
  { title: 'कुखुरा पालन व्यवसाय कसरी सुरु गर्ने ? | Poultry Farming | Nepal Farkeypachi', link: '/courses/player/chicken-farming' },
  { title: 'केरा खेतीको बढ्दो बजार, लगानी सय, आम्दानी हजार | Banana Farming In Nepal', link: '/courses/player/banana-farming' },
  { title: 'फुल खेती एक पटकको लगानी, पाँच वर्ष ढुक्क आम्दानी | Cut Flower Business |', link: '/courses/player/flower-farming' },
  { title: 'यसरी गरे गोलभेँडा खेती गर्न सकिन्छ लाखौंको आम्दानी | Tomato Farming', link: '/courses/player/tomato-farming' },
  { title: 'एक महिनामै च्याउ खेतीबाट कसरी गर्ने लाखौंको आम्दानी? |Mushroom Farming', link: '/courses/player/mushroom-farming' },
  { title: 'बङ्गुर पालेर बन्ने होइन त मालामाल? | Pig Farming In Nepal', link: '/courses/player/mushroom-farming' },
  { title: 'लाखौं आम्दानी हुने भएपछि अकबरे खुर्सानीमा खेती आर्कषण Akbare Khursani', link: '/courses/player/mushroom-farming' },
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = suggestionsList.filter((suggestion) =>
        suggestion.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (link) => {
  
    navigate(link);
    
  
    setFilteredSuggestions([]);
    setSearchTerm(''); 
  };

  return (
    <>
      <div className='md:w-96 relative '>
        <input
          type="search"
          placeholder="धान खेत कसरी बनाउने..."
          className='p-2 rounded-lg sm:w-96 bg-white text-black mb-10 w-80 '
          value={searchTerm}
          onChange={handleSearchChange}
        />

        {/* Display suggestions dropdown */}
        {filteredSuggestions.length > 0 && (
          <ul className="absolute bg-white border border-gray-300 mt-2 w-full rounded-lg shadow-lg z-10">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion.link)}
                className="cursor-pointer px-4 py-2 hover:bg-gray-200"
              >
                {suggestion.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
