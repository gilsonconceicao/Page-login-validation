import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './page/loginUser/login/Login';
import './App.css';
import Register from './page/registerUser/register/Register';
import { useEffect, useState } from 'react';
import Home from './page/home/Home';

function App() {
  const [isLogged, setIsLogged] = useState<boolean | null>(true); 
  const [userCameIn, setUserCameIn] = useState<boolean | null>(true);

  useEffect(() => {
    const checkedIsUser = () => {
      if (localStorage.getItem('@data-user') === null) { 
        setIsLogged(null)
      } else if (localStorage.getItem('@data-user') === null && localStorage.getItem('@userCamein') === null) {
        setUserCameIn(null);
      }
    }
    checkedIsUser()
  }, [])

  {isLogged !== null ? console.log('Existem dados no banco.') : console.log('Banco está vázio.')}

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          isLogged !== null ? <Login/> : <Register/>
        }/>
        {userCameIn !== null && <Route path='/home' element={<Home/>}/>}
      </Routes>
    </BrowserRouter>
  );
}

export default App;