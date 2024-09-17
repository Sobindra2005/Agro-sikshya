import React from 'react'
import { FaArrowDownLong,FaArrowUpLong } from "react-icons/fa6";
import A from '../../assets/thumbnail/1.jpg'
export default function Table() {
    let datas = [
        {
            id:1,
            image:A,
            name:"Potatoes",
            price:"Rs80",
            maxPrice:"Rs100",
            minPrice:"Rs60",
            change:<FaArrowDownLong/>
        },
        {
            id:2,
            image:A,
            name:"Potatoes",
            price:"Rs80",
            maxPrice:"Rs100",
            minPrice:"Rs60",
            change:<FaArrowDownLong/>
        },
        {
            id:3,
            image:A,
            name:"Potatoes",
            price:"Rs80",
            maxPrice:"Rs100",
            minPrice:"Rs60",
            change:<FaArrowUpLong/>
        },
        {
            id:4,
            image:A,
            name:"Potatoes",
            price:"Rs80",
            maxPrice:"Rs100",
            minPrice:"Rs60",
            change:<FaArrowUpLong/>
        },
        {
            id:5,
            image:A,
            name:"Potatoes",
            price:"Rs80",
            maxPrice:"Rs100",
            minPrice:"Rs60",
            change:<FaArrowDownLong/>
        },
    ]
  return (
    <>
    <div className='m-4'>
        <table>
            <thead>
                <tr className='space-x-20 flex bg-accent p-4  text-white'>
                    <th> Images</th>
                    <th> Commodity</th>
                    <th> PRICE (per KG)  </th>
                    <th > Max price <span className='flex flex-col'> (over one month)</span></th>
                    <th > Min price <span className='flex flex-col'> (over one month)</span></th>
                    <th > Change <span className='flex flex-col'> (over one month)</span></th>
                </tr>
            </thead>
            <tbody>
                {
                    datas.map((data)=>{
                        let { id,image, name,price, maxPrice, minPrice,Change} = data;
                        return<>
                        <div className='flex '>
                            <tr className='flex  space-x-40'>
                                <td>{image}</td>
                                <td>{name}</td>
                                <td>{price}</td>
                                <td>{maxPrice}</td>
                                <td>{minPrice}</td>
                                <td>{Change}</td>
                            </tr>
                        </div>
                        </>
                    })
                }
            </tbody>
        </table>
    </div>
    </>
)
}
