import { client } from "./appwrite";
import { Databases } from "appwrite";

const databases = new Databases(client);

export const create_Document=(collectionId, payload)=>{


    databases.createDocument('66e515e60033d4ac0db3', collectionId, 'unique()', payload)
    .then(response => {
      console.log('Document created:', response);
    })
    .catch(error => {
      console.error('Error creating document:', error);
    });

}