import { client} from "./appwrite";
import { Account } from "appwrite";

const account = new Account(client);

export const GetCurrentUser=async ()=>{
    return await account.get()
}