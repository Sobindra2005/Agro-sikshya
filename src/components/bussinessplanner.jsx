import React, { useState } from "react";
import Sidebar from "./menu/sidebar";
import image from "../assets/Image 30.png";
import { MainBussinessPlanner } from "./mainBussinessPlanner/main";

export const BussinessPlanner = () => {
  return (
    <>
      <div className="flex ">
        <Sidebar />

        {/* bussiness planner  */}
        <div className="w-full p-6">
          <div className="h-[100vh]  flex  ">
            <div className=" flex flex-col  w-[94%]">
              <span>Bussiness planner</span>
              <MainBussinessPlanner/>
         </div>
            <img className="w-16 h-16 ml-4" src={`${image}`} />
          </div>
        </div>
      </div>
    </>
  );
};
