import React from 'react'
import styles from './Home.module.css'; 

const Home = () => {

  const userSigOutAccount = () => {
    localStorage.removeItem('@userCamein');
    window.location.href = '/'; 
  }  

  const removeAccount = () => {
    if (window.confirm('Deseja excluir a conta?') === true ) {
        localStorage.clear(); 
        window.location.href = '/'; 
    } 
    return
  }  

  return (
    <div>
      <h1 className={styles.title}>Home Page!</h1>  
      <button className={styles.button_actions} onClick={userSigOutAccount}>Sair da conta</button>

      <button className={styles.button_actions} onClick={removeAccount}>Excluir conta</button>
    </div>
  )
}

export default Home;