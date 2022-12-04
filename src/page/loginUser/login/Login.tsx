import React from 'react'
import Form from '../form/Form'

import styles from './Login.module.css'; 

const Login = () => {
  return (
    <div className={styles.container_login}>
      <h1>Entrar com a sua conta.</h1>
      <p>Basta preencher o <strong>email</strong> e a sua <strong>senha</strong> para prosseguir.</p>  
      <Form/>  
    </div>
  )
}

export default Login