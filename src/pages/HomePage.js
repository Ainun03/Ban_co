import React, { Fragment } from "react";

// Link
import MyNavbar from "../component/LandingPage/Navbar";
import JumbrotonHome from "../component/LandingPage/Jumbroton/Jumbroton";
import KetBan from "../component/LandingPage/Keterangan/KetBanCo";
import Payment from "../component/LandingPage/Payment/Payment";
import Card from "../component/LandingPage/Card/Card";
import Diskon from "../component/LandingPage/Discount/Discount";
import Footer from "../component/LandingPage/Footer";

function HomePage(){
    return(
        <Fragment>
            <div className="">
                <MyNavbar/>
                <JumbrotonHome/>
                <KetBan/>
                <Payment/>
                <div className="bg-gradient-to-br shadow-md from-[#2EB51F40]">     
                    <div className=" mx-8 ">
                        <div className="flex justify-between">
                            <h1 className="text-lg text-black-500 font-semibold">Best Selling Products</h1>
                            <h1 className="text-lg text-primary font-semibold">See All</h1>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 py-3">
                            <Card/>
                        </div>
                    </div>
                    <Diskon/>
                </div>
                <Footer/>
            </div>
        </Fragment>

    )
}
export default HomePage;