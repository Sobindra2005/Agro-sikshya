import React, { useState } from "react";
import Sidebar from "./menu/sidebar";
import image from '../assets/image30.png';
import { MainBussinessPlanner } from "./mainBussinessPlanner/main";

export const BussinessPlanner = () => {
  return (
    <>
      <div className="flex ">
        <Sidebar />

        {/* bussiness planner  */}
        <div className="w-full p-6">
          <div className="  flex  ">
            <div className=" flex flex-col  w-[94%]">
              <span className="font-semibold text-lg text-gray-900">
                Bussiness planner
              </span>
              <MainBussinessPlanner />
            </div>
            <img className="w-16 h-16 ml-4" src={`${image}`} />
          </div>
        </div>
      </div>
    </>
  );
};
