import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cuisine from './Cuisine';
import Home from './Home';
import Recipe from './Recipe';
import Searched from './Searched';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/cuisine/:type'} element={<Cuisine />} />
          <Route path={'/search/:type'} element={<Searched />} />
          <Route path={'/recipe/:id'} element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages