import React from 'react';
import { Outlet } from 'react-router-dom';

// components Start
import Header from './components/Header';
import FixedBtn from './components/FixedBtn';
import Footer from './components/Footer';
// components End

// style Start
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/controller';
import './css/normalize.css'
import './css/style.css'
// style End

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <FixedBtn />
      <Footer />
    </>
  );
}

export default Root;
