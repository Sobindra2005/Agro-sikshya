import { client } from "./appwrite";
import { Databases } from "appwrite";
import { Query } from "appwrite";
const databases = new Databases(client);

export const create_Document = (collectionId, payload) => {
  databases.createDocument('66f0d7320038bcc5aa55', collectionId, `unique()`, payload)
    .then(response => {
      console.log('Document created:', response);
      return response
    })
    .catch(error => {
      console.error('Error creating document:', error);
    });
}

export const read_Document = (collectionId, DocumentId) => {
  databases.listDocuments('66f0d7320038bcc5aa55', collectionId, `${DocumentId}`)
    .then(response => {
      console.log('Document created:', response);
      return response
    })
    .catch(error => {
      console.error('Error creating document:', error);
    });

}


export const read_DocumentWithId = async (collectionId, Id) => {
  try {
    const response = await databases.listDocuments('66f0d7320038bcc5aa55', collectionId, [
      Query.equal('AuthorId', Id)
    ]);
    return response.documents; // Return the array of documents
  } catch (error) {
    console.error('Error retrieving documents:', error);
    return []; // Return an empty array if there's an error
  }
};

export const WithArgumentAndParameter = async (collectionId,parameter, value) => {
  try {
    const response = await databases.listDocuments('66f0d7320038bcc5aa55', collectionId, [
      Query.equal(`${parameter}`, value),
      
    ]);
    return response.documents; // Return the array of documents
  } catch (error) {
    console.error('Error retrieving documents:', error);
    return []; // Return an empty array if there's an error
  }
};

export const update_Document = async (documentId, collectionId, updatedData) => {
  try {
    const response = await databases.updateDocument(
      '66f0d7320038bcc5aa55',
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
      '66f0d7320038bcc5aa55',
      collectionId,
      documentId
    );
    console.log('Document deleted successfully');
  } catch (error) {
    console.error('Error deleting document:', error.message);
  }
};

