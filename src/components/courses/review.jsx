import React from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";

export default function Review() {
    let reviews = [
        {
            id: 1,
            name: "Hari Pokhrel",
            rating: 4.5,
            comment: "राम्रै भिडियो, धेरै कुरा जान्न पाइयो।",
        },
        {
            id: 2,
            name: "Shyam Poudel",
            rating: 3.5,
            comment: "Good, but could be better",
        },
        {
            id: 3,
            name: "Angel Battarai",
            rating: 5,
            comment: "Maile chayeko kura haru raixa, dherai sahayog bhayo malai",
        },
    ];

    // Function to render stars
    const renderStars = (rating) => {
        const stars = [];
        // Loop to render filled or half stars
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="fill-yellow-500" />);
            } else if (i - rating === 0.5) {
                stars.push(<FaStar key={i} className="fill-yellow-500 opacity-50" />);
            } else {
                stars.push(<FaRegStar key={i} className="fill-yellow-500" />);
            }
        }
        return stars;
    };

    return (
        <>
            <div>
                <section className="bg-purewhite px-4 py-12 md:py-24">
                    <div className="max-w-screen-xl mx-auto">
                        <h2 className="font-black text-black text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-12">
                            What Listeners Are Saying
                        </h2>
                        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 relative">
                            {reviews.map((review) => {
                                let { id, name, comment, rating } = review;
                                return (
                                    <div
                                        key={id}
                                        className="bg-gray-200 rounded-lg p-8 text-center md:w-1/3"
                                    >
                                        <p className="font-bold uppercase m-2">{name}</p>
                                        <p className="text-xl font-light italic text-gray-700">{comment}</p>
                                        <div className="flex items-center justify-center space-x-2 mt-4">
                                            {renderStars(rating)}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
