'use client'
import{postUser} from "@/app/functions/handlerAcessAPI";
import { useRouter } from "next/navigation";
import React, {userState} from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Register(){
  const [user, setUser] = userState({
    name: '',
    email: '',
    password: '',
  });
  const {push} = useRouter();
}

const Form = () => {
    const handlerLogin = async (e) => {
    e.preventDefault();
    toast.success('registrado com sucesso')
  }
  return (
    <div>
      <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="/pages/alterar">Alterar</a></li>
  <li><a href="/pages/registrar">Registrar</a></li>

</ul>
      <h1>Login de Registro </h1>
      <form onSubmit={handlerLogin}>
    
      <input
          placeholder='nome'
          type="nome" >
        </input>
        <input
    
          placeholder='E-mail'
          type="email">
        </input>

        <input
          placeholder='Senha'
          type='password'
        >
        </input>
     
        <button>Entrar</button>
      </form>
      <ToastContainer/>
    </div>

  )
};


