'use client'
import { updateUser } from '@/app/functions/handlerAcessAPI';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function alterar ({params}){

const [user,setUser] = useState({
  name:'',
  email:'',
  password:'',
});
const {push} = useRouter()


  const handlerLogin = async (event) => {
    event.preventDefault();
    await updateUser(user, params.id);
   return push ("/pages/dashboard");
  }
  return (
    <div>
        <ul>
     
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="/pages/alterar">Alterar</a></li>
  <li><a href="/pages/registrar">Registrar</a></li>

</ul>
      <h1>Login de Alterar caso precise </h1>
      <form onSubmit={handlerLogin}>

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
        <button> <a href="/pages/dashboard">Voltar</a></button>
      </form>
      <ToastContainer/>
    </div>
  )};



