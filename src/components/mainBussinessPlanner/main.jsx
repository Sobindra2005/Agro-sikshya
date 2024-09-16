import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Image34 from "../../assets/Image 34.png";
import Image35 from "../../assets/Image 35.png";
import Image37 from "../../assets/Image 37.png";
import Image39 from "../../assets/Image 39.png";
import Image40 from "../../assets/Image 40.png";

const farmingData = [
  {
    type: "organic farming",
    image: Image34,
  },
  {
    type: "poultry farming",
    image: Image35,
  },
  {
    type: "Aquaculture",
    image: Image37,
  },
  {
    type: "Dairy farming",
    image: Image39,
  },
  {
    type: "hydrophobics",
    image: Image40,
  },
];

export const MainBussinessPlanner = () => {
  const [farmingType, setFarmingType] = useState("organic");
  const [farmSize, setFarmSize] = useState(1);
  const [farmScale, setFarmScale] = useState("Small");
  const [landRate, setLandRate] = useState(20);
  const [distance, setDistance] = useState(2);

  return (
    <>
      <div className="border overflow-hidden mt-5 box-sizing: border-box border-black bg-[#FFD31757]  h-[100vh]">
        <span className="text-[16px] text-[#555555] font-semibold ">
          <div className="flex p-4 flex-col">
            <span>Choose a farming type</span>
            <span className="font-normal my-2 text-md  ">
              Select Your Business Type
            </span>
            <span className="mt-3 flex items-center gap-x-3 border-gray-600 font-normal text-center justify-between border w-[10rem] px-3 py-1 bg-white rounded-2xl  text-sm ">
              {farmingType} <IoIosArrowDropdown />
            </span>
            <div className=" flex justify-between mt-2 ">
              {farmingData.map((data, index) => {
                return (
                  <div
                    onClick={() => setFarmingType(data.type)}
                    key={index}
                    className={`${
                      data.type === farmingType ? "border-black" : ""
                    } flex flex-col bg-[#4BE84561] border hover:border-black h-[7rem] justify-between py-3 w-[10rem] text-[14px] p-1 shadow-sm shadow-white  rounded-lg font-normal  items-center gap-x-2`}
                  >
                    <img
                      src={data.image}
                      alt={data.type}
                      className="w-16 h-16"
                    />
                    <span>{data.type}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-4 bg-[#FFD31763] h-[60vh]  mt-7 ">
            <span>Set Parameters</span>

            <div className="">
              <label className="block font-medium ">Farm Size (in acres)</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                value={farmSize}
                onChange={(e) => setFarmSize(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            {/* Farm Scale */}
            <div className="">
              <label className="block font-medium ">Farm Scale</label>
              <div className="flex space-x-4">
                {["Small", "Medium", "Large"].map((scale) => (
                  <label key={scale} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value={scale}
                      checked={farmScale === scale}
                      onChange={() => setFarmScale(scale)}
                      className="text-green-500 focus:ring-green-500"
                    />
                    <span>{scale}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Land Rate */}
            <div className="">
              <label className="block font-medium mb-1">
                Land Rate (in Lakhs per acres)
              </label>
              <select
                className="w-full  border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                value={landRate}
                onChange={(e) => setLandRate(e.target.value)}
              >
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
              </select>
            </div>

            {/* Distance from nearest market */}
            <div className="">
              <label className="block font-medium mb-1">
                Distance from nearest market (in KM)
              </label>
              <select
                className="w-full  border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              >
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
        </span>
      </div>
    </>
  );
};
