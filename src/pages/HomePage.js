import React, { Fragment, useEffect, useState } from "react";

import { useNavigate, useParams } from 'react-router-dom';

import { FiSearch } from "react-icons/fi";
// Link
import MyNavbar from "../component/LandingPage/Navbar";
import JumbrotonHome from "../component/LandingPage/Jumbroton/Jumbroton";
import KetBan from "../component/LandingPage/Keterangan/KetBanCo";
import Payment from "../component/LandingPage/Payment/Payment";
import Card from "../component/LandingPage/Card/Card";
import Diskon from "../component/LandingPage/Discount/Discount";
import Footer from "../component/LandingPage/Footer";


// Redux
import {getProvinsi, getCity, getDistrik } from '../slices/authSlice';
import { getAllProduct,getListProdukType } from "../slices/productSlice";
import { useDispatch, useSelector } from 'react-redux';

function HomePage(){
    const [products, setProducts] = useState([]);
    const {auth, product } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProduct())
        dispatch(getListProdukType())
        dispatch(getProvinsi({
            id: 1
        }))
      }, [dispatch]);
     

      useEffect(() => {
        setProducts(product.products.data);
      }, [product]);

    return(
        <Fragment>
            <div className="">
                <MyNavbar/>
                <JumbrotonHome/>
                <KetBan/>
                {
                auth.login.token ? (
                    <>
                    {/* <KetBan/> */}
                    </>
                    ) : (
                    <></>
                )}
                
                <Payment/>
                <div className="bg-gradient-to-br shadow-md from-[#2EB51F40]">     
                    <div className=" mx-8 ">
                        <div className="flex justify-between">
                            <h1 className="text-lg text-black-500 font-semibold">Best Selling Products</h1>
                            <h1 className="text-lg text-primary font-semibold">See All</h1>
                        </div>
                        {/* <div className="list-category py-4 flex overflow-x-auto no-scrollbar text-clip">
                            <button  
                            className={
                                // category == 'all' ? 'snap-center rounded-lg flex mr-4 bg-primary text-white text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200' : 
                                'snap-center rounded-lg flex mr-4 bg-primary text-[#3C3C3C] text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'
                            }>
                                <FiSearch className='my-auto mr-1' />
                                <span>Semua</span>
                            </button>
                            <button  className='snap-center rounded-lg flex mr-4 bg-primary text-[#3C3C3C] text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'>
                                <FiSearch className='my-auto mr-1' />
                                <span>Pakaian</span>
                            </button>
                            <button className='snap-center rounded-lg flex mr-4 bg-primary text-[#3C3C3C] text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'>
                                <FiSearch className='my-auto mr-1' />
                                <span>Elektronik</span>
                            </button>
                            <button className='snap-center rounded-lg flex mr-4 bg-primary text-[#3C3C3C] text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'>
                                <FiSearch className='my-auto mr-1' />
                                <span>Kesehatan</span>
                            </button>
                            <button  className='snap-center rounded-lg flex mr-4 bg-primary text-[#3C3C3C] text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'>
                                <FiSearch className='my-auto mr-1' />
                                <span>Kendaraan</span>
                            </button>
                            <button  className='snap-center rounded-lg flex mr-4 bg-primary text-[#3C3C3C] text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'>
                                <FiSearch className='my-auto mr-1' />
                                <span>Hobi</span>
                            </button>
                            
                        </div> */}
                        {/* <div className="grid grid-cols-2 md:grid-cols-6 gap-4"> */}
                        <div className=" w-full overflow-scroll nap-proximity snap-x ">
                            <div className="snap-center relative flex items-center justify-center w-screen ">
                            {console.log("bawaj",products)}
                                {
                                    products ? (
                                        products.map((item) => 
                                    // <div className="snap-x w-screen h-screen overflow-scroll bg-white snap-mandatory">
                                        <div className="mx-2 my-3">
                                            <Card key={item.id} product={item} />
                                        </div>
                                    //   </div>
                                    )
                                ) : (
                                    <div className='w-[90vw] text-center md:text-start'>
                                    <p className='mt-20 text-lg font-bold'>Produk Kosong</p>
                                    </div>
                                )
                                }
                            </div>
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