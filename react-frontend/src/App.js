import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddBuyer from './components/AddBuyer';
import ViewBuyers from './components/ViewBuyers';
import UpdateBuyer from './components/UpdateBuyer';
import DeleteBuyer from './components/DeleteBuyer';

function App() {
  return (
    <>
    <h1>Estate Agent ReactJs App</h1>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<ViewBuyers/>} exact={true}/>
      <Route path={"/viewBuyers"} element={<ViewBuyers/>} exact={true}/>
      <Route path={"/AddBuyer"} element={<AddBuyer/>} exact={true}/>
      <Route path={"/UpdateBuyer"} element={<UpdateBuyer/>} exact={true}/>
      <Route path={"/DeleteBuyer"} element={<DeleteBuyer/>} exact={true}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
