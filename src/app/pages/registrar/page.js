'use client'
import{postUser} from "@/app/functions/handlerAcessAPI";
import { useRouter } from "next/navigation";
import React, {useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Register(){
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const {push} = useRouter();


const form = async (e) => {
    e.preventDefault();
    await postUser(user);
    toast.success('registrado com sucesso')
    push('/pages/dashboard')
}
  
  return (
    <div>
      <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="/pages/alterar">Alterar</a></li>
  <li><a href="/pages/registrar">Registrar</a></li>

</ul>
      <h1>Login de Registro </h1>
      <form onSubmit={form}>
    
      <input
          placeholder='nome'
          type="nome" 
            onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
        </input>
        <input
    
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>

        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
        >
        </input>
     
        <button>Entrar</button>
      </form>
      <ToastContainer/>
    </div>

  )
}




