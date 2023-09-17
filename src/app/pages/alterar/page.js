'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

  const handlerLogin = async (e) => {
    e.preventDefault();
    toast.success('alterado com sucesso')
  }
  return (
    <div>
        <ul>
     
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="/pages/alterar">Alterar</a></li>
  <li><a href="/pages/registrar">Registrar</a></li>

</ul>
      <h1>Login de Alterar </h1>
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
        <button><a href="/pages/dashboard">Voltar</a></button>
      </form>
      <ToastContainer/>
    </div>
  )
};

export default Form;
