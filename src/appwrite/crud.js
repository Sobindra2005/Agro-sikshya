import { client } from "./appwrite";
import { Databases } from "appwrite";
import { Query } from "appwrite";
const databases = new Databases(client);

export const create_Document = (collectionId, payload) => {
  databases.createDocument('66e515e60033d4ac0db3', collectionId, `unique()`, payload)
    .then(response => {
      console.log('Document created:', response);
    })
    .catch(error => {
      console.error('Error creating document:', error);
    });
}

export const read_Document = (collectionId, DocumentId) => {
  databases.listDocuments('66e515e60033d4ac0db3', collectionId, `${DocumentId}`)
    .then(response => {
      console.log('Document created:', response);
    })
    .catch(error => {
      console.error('Error creating document:', error);
    });

}


export const read_DocumentWithId = (collectionId, Id) => {
  databases.listDocuments('66e515e60033d4ac0db3', collectionId, [
    Query.equal('AuthorId', Id)
  ])
    .then(response => {
    return response.documents;
    })
    .catch(error => {
      console.error('Error retrieving documents:', error); 
    });
};

export const update_Document = async (documentId, collectionId, updatedData) => {
  try {
    const response = await databases.updateDocument(
      '66e515e60033d4ac0db3',
      collectionId,
      documentId,
      updatedData
    );
    console.log('Document updated successfully:', response);
  } catch (error) {
    console.error('Error updating document:', error.message);
  }
};


export const delete_Document = async (collectionId, documentId) => {
  try {
    await databases.deleteDocument(
      '66e515e60033d4ac0db3',
      collectionId,
      documentId
    );
    console.log('Document deleted successfully');
  } catch (error) {
    console.error('Error deleting document:', error.message);
  }
};
