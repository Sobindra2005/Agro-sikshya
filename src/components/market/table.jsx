import React from 'react';
import { FaArrowDownLong, FaArrowUpLong } from 'react-icons/fa6';
import Potato from '../../assets/vegitables/potato.svg';
import Chilli from '../../assets/vegitables/chilli.svg';
import Fish from '../../assets/vegitables/fish.svg';
import Sugar from '../../assets/vegitables/sugar.svg';
import Chicken from '../../assets/vegitables/chicken.svg';

export default function Table() {
    let datas = [
        {
            id: 1,
            image: Potato,
            name: 'Potatoes',
            price: 'Rs80',
            maxPrice: 'Rs100',
            minPrice: 'Rs60',
            change: <FaArrowDownLong className="text-red-600" />,
        },
        {
            id: 2,
            image: Chilli,
            name: 'Chilli',
            price: 'Rs80',
            maxPrice: 'Rs100',
            minPrice: 'Rs60',
            change: <FaArrowDownLong className="text-red-600" />,
        },
        {
            id: 3,
            image: Fish,
            name: 'Fish',
            price: 'Rs80',
            maxPrice: 'Rs100',
            minPrice: 'Rs60',
            change: <FaArrowUpLong className="text-accent" />,
        },
        {
            id: 4,
            image: Sugar,
            name: 'Sugar',
            price: 'Rs80',
            maxPrice: 'Rs100',
            minPrice: 'Rs60',
            change: <FaArrowUpLong className="text-accent" />,
        },
        {
            id: 5,
            image: Chicken,
            name: 'Chicken',
            price: 'Rs80',
            maxPrice: 'Rs100',
            minPrice: 'Rs60',
            change: <FaArrowDownLong className="text-red-600" />,
        },
    ];

    return (
        <div className="m-4">
            {/* Enable horizontal scroll on small screens */}
            <div className="overflow-x-auto">
                <table className="sm:w-full min-w-[700px] bg-sixth table-fixed border-collapse">
                    <thead>
                        <tr className="bg-accent text-white m-2 p-2">
                            <th className="p-4">Images</th>
                            <th className="p-4 border">Commodity</th>
                            <th className="p-4">PRICE (per KG)</th>
                            <th className="p-4 border">Max price <br />(over one month)</th>
                            <th className="p-4">Min price <br />(over one month)</th>
                            <th className="p-4 border">Change <br />(over one month)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data) => {
                            let { id, image, name, price, maxPrice, minPrice, change } = data;
                            const bgColor = id % 2 === 0 ? '#FFF0AF' : '#CCF7AE';
                            return (
                                <tr
                                    key={id}
                                    className="text-center"
                                    style={{ backgroundColor: bgColor }}
                                >
                                    <td className="p-4">
                                        <img
                                            src={image}
                                            alt={name}
                                            className="aspect-square w-16 sm:w-24"
                                        />
                                    </td>
                                    <td className="p-4 font-bold">{name}</td>
                                    <td className="p-4">{price}</td>
                                    <td className="p-4">{maxPrice}</td>
                                    <td className="p-4">{minPrice}</td>
                                    <td className="p-8 sm:p-16">{change}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
    