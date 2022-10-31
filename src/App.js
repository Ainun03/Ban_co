import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CoconutsPage from './pages/Cocon';
import BananaPage from './pages/BananaPage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< HomePage/>} />
        <Route path='/kelapa' element={< CoconutsPage/>} />
        <Route path='/banana' element={< BananaPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
