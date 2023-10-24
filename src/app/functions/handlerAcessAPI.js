'use server'

import { headers } from "next/dist/client/components/headers";

const url = "https://aula-17-10-sand.vercel.app";
const getUserAuthenticated = async (user) => {
const responseOfApi = await fetch (url + "/user/authenticated",
{
    method: "POST", 
    headers:{"content-type":"application/json"},
    body: JSON.stringify(user)
}
);
const userAuth = await responseOfApi.json();
return userAuth;



}

const getUsers = async() =>{

    const responseOfApi  = await fetch (url + "/users")
    
    const lista = await responseOfApi.json();
    return lista;
}
export { getUsers, getUserAuthenticated };