import { IoAddCircleOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";

export const MyBusinessPlan = () => {
    return (
        <>
            <div className="py-4 h-screen ">
                <h1 className="font-semibold  text-gray-800 text-xl ">My Bussiness</h1>

                <div className="mt-4 p-5">
                    <h1 className="text-xl border-b border-gray-600 w-fit pr-[10rem]  ">Plan Lists</h1>
                    {/* list container */}
                    <div className="border mt-4 border-black p-3  shadow shadow-gray-500  ">
                        <div className=" p-2 flex justify-between flex-col px-3 ">
                            {/* for list to map  */}
                            <div className="border  flex justify-between hover:bg-gray-200 border-gray-300 mb-3 p-2">

                                <div className="cursor-pointer ">  <span className="text-lg font-semibold text-gray-700 ">1.</span> <span className=" text-lg font-semibold text-gray-700 ">
                                    <Link to="/businessDiary/plan"> My Revenue plan</Link>
                                </span>
                                </div>


                                {/* for icons */}
                                <div className="flex items-center justify-center text-gray-500 gap-x-3 ">
                                    <TbEdit className="w-5 cursor-pointer h-5 hover:text-gray-900" /><FaTrash className="cursor-pointer hover:text-gray-900 w-4 h-4 " />
                                </div>
                            </div>

                            <div className=" cursor-pointer p-2 gap-x-2 flex justify-center mt-10 text-gray-800 items-center  border border-dotted border-black">
                                <IoAddCircleOutline className="w-8 h-8 text-gray-500  " />Add New Plan
                            </div>
                        </div>
                    </div>

                </div>
            </div>




        </>
    )
}