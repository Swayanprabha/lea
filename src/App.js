import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Search from './Page/Search'
import Review from './Page/Review'
import Navbar from './Page/NavbarLine'
import Account from './Page/Account'
import Footer from './Page/Footer'
import LoginSignup from './Page/LoginSignup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Page/Login';
import Error from './Page/Error';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/search" element={<Search/>}/>
    <Route path='/review' element={<Review/>}/>
    <Route path='/Account' element={<Account/>}/>
    <Route path='/LoginSignup' element={<LoginSignup/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Error' element={<Error/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App