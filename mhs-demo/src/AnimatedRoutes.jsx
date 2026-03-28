import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductIndexPage from './pages/ProductIndexPage';
import ProductShowPage from './pages/ProductShowPage';
import BlogsIndexPage from './pages/BlogsIndexPage';
import BlogShowPage from './pages/BlogShowPage';
import ContactPage from './pages/ContactPage';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:categoryId" element={<ProductIndexPage />} />
        <Route path="/products/:categoryId/:productId" element={<ProductShowPage />} />
        <Route path="/blogs" element={<BlogsIndexPage />} />
        <Route path="/blogs/:blogId" element={<BlogShowPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};
export default AnimatedRoutes;
