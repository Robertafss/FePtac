import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import Listar from "@/app/componentes/listar";

export default async function Dashboard() {

    const users = getUsers()
    return (
        <div> 
             <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="/pages/alterar">Alterar</a></li>
  <li><a href="/pages/registrar">Registrar</a></li>
  <li><a href="#about">About</a></li>
</ul>
            <Suspense fallback={<p>  Está pagina esta carregando ...</p>}>
                <Listar users={users}/>
                <button><a href="/pages/alterar">Alterar</a></button>
                <button><a href="/pages/registrar">Registrar</a></button>
</Suspense>
            
        </div>
    );
};