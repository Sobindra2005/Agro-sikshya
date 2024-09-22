import { IoAddCircleOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Fixedcontainer } from "./fixedContainer";
import { useEffect, useState } from "react";
import { read_DocumentWithId } from "../../appwrite/crud";
import { GetCurrentUser } from "../../appwrite/service";

export const MyBusinessPlan = () => {
    const [addPlan, setaddPlan] = useState(false);
    const [plans, setplans] = useState([]);

    console.log("plans is here ", plans);

    const getData = async () => {
        try {
            const user = await GetCurrentUser();
            const responce = await read_DocumentWithId('66ef745300130e8769c6', `${user.$id}`);
          console.log(responce)
            
            if (Array.isArray(responce)) {
                setplans(responce);
            } else {
                console.error("Response is not an array:", responce);
                setplans([]); 
            }

        } catch (error) {
            console.error("Error fetching data:", error);
            setplans([]); 
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {addPlan && <Fixedcontainer setaddPlan={setaddPlan} />}
            <div className="py-4 h-screen text-black ">
                <h1 className="font-semibold text-gray-800 text-xl">My Business</h1>

                <div className="mt-4 p-5">
                    <h1 className="text-xl border-b border-gray-600 w-fit pr-[10rem]">Plan Lists</h1>

                    {/* List container */}
                    <div className="border mt-4 border-black p-3 shadow shadow-gray-500">
                        <div className="p-2 flex justify-between flex-col px-3">

                            {/* Map over the plans */}
                            {plans.length > 0 ? (
                                plans.map((plan, index) => (
                                    <div key={index} className="border flex justify-between hover:bg-gray-200 border-gray-300 mb-3 p-2">
                                        <div className="cursor-pointer">
                                            <span className="text-lg font-semibold text-gray-700">{index + 1}.</span>
                                            <span className="text-lg font-semibold text-gray-700">
                                                <Link to="/businessDiary/plan">{plan.Newplan}</Link>
                                            </span>
                                        </div>
                                        {/* For icons */}
                                        <div className="flex items-center justify-center text-gray-500 gap-x-3">
                                            <TbEdit className="w-5 cursor-pointer h-5 hover:text-gray-900" />
                                            <FaTrash className="cursor-pointer hover:text-gray-900 w-4 h-4" />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No plans available</p> // Display this if there are no plans
                            )}

                            <div onClick={() => setaddPlan(true)} className="cursor-pointer p-2 gap-x-2 flex justify-center hover:bg-gray-500 mt-10 text-gray-800 items-center border border-dotted border-black">
                                <IoAddCircleOutline className="w-8 h-8 text-gray-500" />Add New Plan
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
