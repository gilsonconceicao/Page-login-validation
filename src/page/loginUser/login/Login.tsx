import React from 'react'
import { Navigate } from 'react-router';
import { useAuthUser } from '../../../hooks/useAuthUser';
import Home from '../../home/Home';
import FormLogin from '../form/FormLogin'

import styles from './Login.module.css'; 

const Login = () => {
  const {userCameIn} = useAuthUser();
  return (
    <>
      {
        userCameIn !== null ? 
          <Home/>
          : 
          <div className='containerForm'>
            <h1>Entrar com a sua conta.</h1>
            <p>Basta preencher o <strong>email</strong> e a sua <strong>senha</strong> para prosseguir.</p>
            <FormLogin/>
          </div>
      }
    </>
  )
}

export default Login