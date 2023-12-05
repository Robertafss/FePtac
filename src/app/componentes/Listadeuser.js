import Link from "next/link";
export default async function Listadeuser({users}){
    await new Promise((resolve) => setTimeout(resolve,5000));
    return(
        <div>
            {users?.map((user, index)=>
            <p key={index}>
                <Link href={`/pages/alterar/${user.id}`}>  {user.name} </Link>
               </p> 
            )}
            </div>

    )
}