import React from 'react';
import Header from './header';
import Middle from './Middle';
import { Route,Routes } from 'react-router-dom';
import Footer from './Footer';
import Middlelower from './Middlelower';
import Subscription from './Subscription';


function Files () {
  return (
    <div>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Middle/>}></Route>
            <Route path='/Subscription' element={<Subscription/>}></Route>
        </Routes>
        <Middlelower></Middlelower>
        <Footer></Footer>
     
    </div>
  )
}

export default Files