import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import DetailsPage from '../containers/detailsPage';
import Home from '../containers/homePage';
import JobPage from '../containers/jobPage';

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/jobs' element={<JobPage />} />
        <Route path='/details/:id' element={<DetailsPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Routers;