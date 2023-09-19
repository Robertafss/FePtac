import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import List from "@/app/componentes/list";

export default async function Dashboard() {

    const users = getUsers()
    return (
        <div> 
           
            <Suspense fallback={<p>  Está pagina esta carregando ...</p>}>
                <h1> Lista de Usuarios ate o momento </h1>
                <List users={users}/>
                <h1> Aperte em algum botao  para redirecionar</h1>
                <button><a href="/pages/alterar">Alterar</a></button>
                <button><a href="/pages/registrar">Registrar</a></button>
</Suspense>
            
        </div>
    );
};