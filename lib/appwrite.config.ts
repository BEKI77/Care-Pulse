import * as sdk from 'node-appwrite';
import dotenv from 'dotenv';

dotenv.config();

export const { 
    PROJECT_ID,
    API_KEY,
    DATABASE_ID,
    PATIENTS_COLLECTION_ID,
    DOCTORS_COLLECTION_ID,
    APPOINTMENTS_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client(); 

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("66f1bcf1002959a4e721")
    .setKey("standard_e91662c615a5dad0b35b750a21277cdaf7dfe74de6beaa670baefca7c11f8e676ba1554202e71d1c08a38d32954882d2badef960075e64d81e67de089f16e56841e955e695d0a0ee6f97b9434f5620df9de012fca48739ca795816f3e3a7867648f5087cd26e9317f48dda5e8f38d07896aaa19d3369e13b969830358c0805f3")

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);