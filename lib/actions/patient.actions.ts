import { users } from "../appwrite.config";
import { ID, Query } from "node-appwrite";

export const createUser = async (user: CreateUserParams) => {
    try {
        const newUser = await users.create(ID.unique(),
        user.email, 
        user.phone,
        undefined,
        user.name
    );
        // console.log(newUser);
        return newUser;
    }catch(error: any){
        if(error && error?.code === 409){
            const documents = await users.list([
                Query.equal('email', user.email)
            ]);
            return documents?.users[0];
    }}
}

export const getUser = async (userID:string)=>{
    try{
        
    }catch(error: any){
        // console.log(error);
    }
}