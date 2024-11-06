import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Typography } from '@mui/material';
import Form from './component/Form';
import Home from './component/Home';

function App() {

  return (
    <>

  <Navbar /> 

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/form' element={<Form/>}/>

</Routes>

    </>
  )
}

export default App

