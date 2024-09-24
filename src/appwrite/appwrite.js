import { Client } from "appwrite";
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66f0d6e700220de8639b');

export {client}