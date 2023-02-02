import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import MyNavbar from "./Navbar";
import HomePage from "../../pages/HomePage";
import BananaPage from "../../pages/BananaPage";

const NavPage =() =>{
    return(
        <Fragment>
            {/* <MyNavbar/> */}
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/banana" element={<BananaPage />}/>             
            </Routes>
        </Fragment>
    )
}
export default NavPage