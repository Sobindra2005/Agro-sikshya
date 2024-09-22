
import { useState } from "react"
import { create_Document } from "../../appwrite/crud"
import { GetCurrentUser } from "../../appwrite/service"
import { read_DocumentWithId } from "../../appwrite/crud"

export const Fixedcontainer = ({ setaddPlan }) => {
    const [newplan, setnewplan] = useState('')


    const Submitdata = async () => {
        const user = await GetCurrentUser();
        console.log(user)
        const responce = await create_Document("66ef745300130e8769c6", {
            Newplan: `${newplan}`,
            AuthorId: `${user.$id}`
        })
        const document = await read_DocumentWithId('66ef745300130e8769c6', `${user.$id
            }`)
        console.log(document)
        await setnewplan('');
        await setaddPlan(false)
    }

    return (
        <>
            <div className="fixed top-0 flex items-center justify-center right-0 h-screen w-screen bg-gray-500 bg-opacity-50 ">
                <div className="shadow  w-[30rem] bg-white z-999 rounded-xl p-2 border border-gray-300 ">
                    <h1 className="font-semibold text-xl ">Add New Plan </h1>
                    <label htmlFor="NewPlan">Plan Title:</label>
                    <input value={newplan} onChange={(e) => setnewplan(e.target.value)} type="text" name="newPLan" className=" px-2 w-full outline-none border border-gray-500  " id="NewPlan" />

                    <div className="flex justify-between px-3 mt-2 ">
                        <button onClick={() => setaddPlan(false)} className="border border-gray-500 px-2" type="button">Cancel</button>
                        <button onClick={() => Submitdata()} className="border border-gray-500 px-2 " type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}