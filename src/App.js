import React from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

// import MyNavbar from './component/LandingPage/Navbar';
import HomePage from "./pages/HomePage";
import CoconutsPage from "./pages/Cocon";
import BananaPage from "./pages/BananaPage";
import LoginPage from "./pages/auth/Login";
// import ModalRegisterPage from './pages/auth/Register';
import Product from "./pages/product/Product";
import ListProduct from "./pages/product/ListProduct";
import ListJual from "./pages/ListJual";
import KontakPage from "./pages/Kontak";
import PostProduct from "./pages/product/PostProduct";
import ProfilPembeliPage from "./pages/profil/Profil";
import UpdateProfil from "./pages/profil/UpdateProfil";
import Signup from "./pages/RegTes";
import Signing from "./pages/LogTes";
import Profile from "./pages/profil/profilTes";
import PostArticle from "./pages/postArticle";
import UpdateProduk from "./pages/product/UpdateProduk";

import { useSelector, useDispatch } from 'react-redux';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/banana" element={<BananaPage />} />
        <Route path="/kelapa" element={<CoconutsPage />} />
        <Route path="/login" element={<LoginPage checkStatus={false} />} />
        <Route path="/profil" element={<ProfilPembeliPage />} />
        <Route path="/kontak" element={<KontakPage />} />
        <Route path="/update-profile" element={<UpdateProfil />} />
        <Route path="/list-product" element={<ListProduct />} />
        <Route path="/product/:id" element={<Product />} />
        {/* <Route path='/Register' element={< ModalRegisterPage/>} /> */}
        <Route path="/post-product" element={<PostProduct />} />
        <Route path="/list-jual" element={<ListJual />} />
        <Route path="/test" element={<Signup />} />
        <Route path="/log" element={<Signing />} />
        <Route path="/filTes" element={<Profile />} />
        <Route path="/post-article" element={<PostArticle />} />
        
        <Route path="/update-produk/:id" element={<UpdateProduk />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
