import React from 'react';
import Header from '../components/layout/header/Header'
import Main from '../components/layout/main/main';
import Footer from '../components/layout/footer/Footer';
import './App.css'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

