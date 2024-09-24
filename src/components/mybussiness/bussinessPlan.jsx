import { IoAddCircleOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Fixedcontainer } from "./fixedContainer";
import { useEffect, useState } from "react";
import { read_DocumentWithId } from "../../appwrite/crud";
import { GetCurrentUser } from "../../appwrite/service";
import {delete_Document} from "../../appwrite/crud"

export const MyBusinessPlan = () => {
    const [addPlan, setaddPlan] = useState(false);
    const [plans, setplans] = useState([]);
    const [reloaddata,setreloaddata]=useState(false)

 
    const getData = async () => {
        try {
            const user = await GetCurrentUser();
            console.log("user details are :", user)
            const responce = await read_DocumentWithId('66f0e024000d43820128', `${user.$id}`);
            console.log("documents of user are :", responce)


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


    const HanldeRemove=async (id)=>{
        await delete_Document('66f0e024000d43820128',id);
        await getData();

    }

    const handleadd=async ()=>{
        await setaddPlan(true);
    }

    useEffect(() => {
        getData();
    }, [reloaddata]);

    return (
        <>
        {addPlan && <Fixedcontainer reloaddata={reloaddata} setreloaddata={setreloaddata}  setaddPlan={setaddPlan} />}
            <div className="py-4 h-screen text-black  mt-7 ml-2">
                <h1 className="font-semibold text-gray-800 text-xl">My Business</h1>

                <div className="mt-4 p-5">
                    <h1 className="text-xl border-b border-gray-600 w-fit pr-[10rem] font-bold ">Plan Lists</h1>

                    {/* List container */}
                    <div className="border mt-4 border-black p-3 shadow shadow-gray-500">
                        <div className="p-2 flex justify-between flex-col px-3">

                            {/* Map over the plans */}
                            {plans.length > 0 ? (
                                plans.map((plan, index) => (

                                    <div key={index} className="border flex justify-between w-full hover:bg-gray-200 border-gray-300 mb-3 p-2">

                                        <Link to="/businessDiary/plan">
                                            <div className="cursor-pointer ">
                                                <span className="text-lg font-semibold text-gray-700">{index + 1}.</span>
                                                <span className="text-lg font-semibold text-gray-700">
                                                    {plan.Newplan}
                                                </span>
                                            </div>
                                        </Link>
                                        {/* For icons */}
                                        < div className="flex items-center justify-center text-accent gap-x-3 w-fit" >
                                            <TbEdit className="w-5 cursor-pointer h-5 hover:text-fourth" />
                                            <div onClick={() => {HanldeRemove(plan.$id) }}> <FaTrash className="cursor-pointer hover:text-fourth w-4 h-4" /></div>
                                        </div>
                                    </div>

                                ))
                            ) : (
                                <p>No plans available</p> // Display this if there are no plans
                            )}

                            <div onClick={() => handleadd()} className="cursor-pointer p-2 gap-x-2 flex justify-center text-purewhite hover:bg-fourth bg-accent mt-10 items-center border border-dotted border-black">
                                <IoAddCircleOutline className="w-8 h-8 " />Add New Plan
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
};
