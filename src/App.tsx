import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './page/loginUser/login/Login';
import './App.css';
import Register from './page/registerUser/register/Register';
import { useEffect, useState } from 'react';
import Home from './page/home/Home';
import { useAuthUser } from './hooks/useAuthUser';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;