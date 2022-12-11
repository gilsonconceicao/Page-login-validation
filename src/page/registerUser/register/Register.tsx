import React from 'react'; 
import { useAuthUser } from '../../../hooks/useAuthUser';
import Login from '../../loginUser/login/Login';
import FormRegister from '../form/FormRegister';

const Register = () => {
  const {isLogged} = useAuthUser(); 

  return (
    <>
      {isLogged !== null ? 
        <Login/>
      :
       <div className='containerForm'>
          <h1>Cadastro</h1> 
          <p>Crie a sua conta de maneira fácil e rápida.</p>  
        <FormRegister/>  
       </div>
      }
    </>
  )
} 

export default Register