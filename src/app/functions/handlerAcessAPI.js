'use server'

import { headers } from "next/dist/client/components/headers";

const url = "https://aula-17-10-sand.vercel.app";
const getUserAuthenticated = async (user) => {
    try{
const responseOfApi = await fetch (url + "/user/authenticated",
{
    method: "POST", 
    headers:{"content-type":"application/json"},
    body: JSON.stringify(user)
}
);
const userAuth = await responseOfApi.json();
return userAuth;
} catch{
    return null;
    }
}
///novo
const postUser = async (user) =>{
    try{
        const responseOfApi = await fetch(url + "/user", {
            method:'post',
            headers: {'content-type': 'Application/json'},
            body: JSON.stringify(user)

        });
        const useSave = await responseOfApi.json();
        return useSave;

    }catch{
        return null;
    }

}
const updateUser = async (user, id) =>{
    try{
        const responseOfApi = await fetch(url + "/user/" + id, {
            method:'PUT',
            headers: {'content-type': 'Application/json'},
            body: JSON.stringify(user)

        });
        const userUpdade = await responseOfApi.json();
        console.log (userUpdade)
        return  userUpdade;

    }catch{
        return null;
    }

}
//novo
const getUsers = async() =>{
    const responseOfApi = await fetch (url + "/users",
    {next: {revalidate: 10 }}
    );
    const lista = await responseOfApi.json();
    return lista;
}
export { getUsers, getUserAuthenticated, postUser, updateUser };