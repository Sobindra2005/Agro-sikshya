import React, { useState } from 'react';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ rating, comment });
    setRating(0);
    setComment('');
  };

  return (
    <div className="max-w-md mx-auto  p-3 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Leave a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex mb-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-8 h-8 cursor-pointer ${rating > index ? 'text-yellow-500' : 'text-gray-400'}`}
              fill="currentColor"
              viewBox="0 0 24 24"
              onClick={() => setRating(index + 1)}
            >
              <path d="M12 .587l3.668 7.429 8.176 1.174-5.917 5.775 1.398 8.165L12 18.896l-7.325 3.85 1.398-8.165-5.917-5.775 8.176-1.174z" />
            </svg>
          ))}
        </div>
        <textarea
          className="w-full p-2 border rounded-md mb-4  border-accent"
          rows="4"
          placeholder="तपाईंलाई यो भिडियो कस्तो लाग्यो?..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        
        <button
          type="submit"
          className="w-full py-2 bg-accent text-white rounded-md hover:bg-third"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
