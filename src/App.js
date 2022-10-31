import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CoconutsPage from './pages/Cocon';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< HomePage/>} />
        <Route path='/kelapa' element={< CoconutsPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
