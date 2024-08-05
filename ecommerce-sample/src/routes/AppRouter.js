import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../pages/homePage';
import ProductPage from '../pages/productPage';
import Header from '../components/Header';
import Login from '../pages/login';

function AppRouter() {
  const location = useLocation();
  return (
    <React.Fragment>
      {location.pathname !== '/login' && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </React.Fragment>
  );
}

export default AppRouter;

