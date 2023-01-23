import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './Index';
import Album from './Album';
import Collections from './Collections';
import Burgermenu from './Burger-menu';

const Routes1 = () => {
  return (
    <BrowserRouter>
    <main>
        <Burgermenu></Burgermenu>
        <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/album" element={<Album />} />
        <Route path="/collections" element={<Collections />} />
        </Routes>
    </main>
    </BrowserRouter>
  );
}

export default Routes1;
