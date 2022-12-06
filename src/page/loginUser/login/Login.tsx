import React from 'react'
import FormLogin from '../form/FormLogin'

import styles from './Login.module.css'; 

const Login = () => {
  return (
    <div className='containerForm'>
      <h1>Entrar com a sua conta.</h1>
      <p>Basta preencher o <strong>email</strong> e a sua <strong>senha</strong> para prosseguir.</p>  
      <FormLogin/>  
    </div>
  )
}

export default Login