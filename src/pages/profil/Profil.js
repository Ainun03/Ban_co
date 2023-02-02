import React, { Fragment,useEffect } from "react";

import MyNavbar from "../../component/LandingPage/Navbar";
// import CardCoco from "../../component/CocoPage/Card/Card";
import Card from "../../component/LandingPage/Card/Card";
import Footer from "../../component/LandingPage/Footer";
// redux
import { getUsers } from '../../slices/userSlice';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'


function ProfilPembeliPage(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { auth } = useSelector(state => state);
    const { products } = useSelector(state => state.product);

    //   get users
    // useEffect(() => {
    //     dispatch(getUsers({ 
    //         token: auth.login.token }));
    //   }, [dispatch, auth]);

    return(
        <Fragment>
            <MyNavbar/>
            <div className="flex gap-4 max-w-7xl mx-4 md:mx-auto my-4">
                <div className="flex h-screen bg-tarnsparent bg-white shadow item-center justify-center">
                    <div className="h-full w-48 p-2 flex flex-col justify-center items-center ">
                    <img className='w-24 h-24 rounded-3xl' src='/assets/image/batok.png' alt='banner' />
                        <h1 className="font-bold text-dark text-xl"> {auth.user.name ? auth.user.name : "Nama Profil" }</h1>
                        <Link to='/update-profile'>
                            <p className="text-md italic text-blue-600 text-italic underline underline-offset-1">Edit</p>
                        </Link>
                    </div>
                </div>
                <div className="grid h-full grid-cols-1 md:grid-cols-1 w-full">
                        <h1>Profil</h1>
                    <div className="boder px-3 py-5 border-4 ">
                        <div className="">
                            <h1 className="font-bold text-dark text-xl">Nama : <span className="font-semibold text-dark italic text-italic  text-xl" >{auth.user.name ? auth.user.name : " kosong "}</span>  </h1>
                            <h1 className="font-bold text-dark text-xl">Negara :  <span className="font-semibold text-dark italic text-italic  text-xl" >{auth.user.country.name ? auth.user.country.name  : "Tidak Diketahui" }</span> </h1>
                            <h1 className="font-bold text-dark text-xl">Provinsi : <span className="font-semibold text-dark italic text-italic  text-xl" >{auth.user.province.name ? auth.user.province.name : "Tidak Diketahui"}</span> </h1>
                            <h1 className="font-bold text-dark text-xl">Kota : <span className="font-semibold text-dark italic text-italic  text-xl" >{auth.user.city.name ? auth.user.city.name : "Tidak Diketahui"}</span></h1>
                            <h1 className="font-bold text-dark text-xl">Kecamatan : <span className="font-semibold text-dark italic text-italic  text-xl" >{auth.user.district.name ? auth.user.district.name : "Tidak Diketahui"}</span> </h1>
                            <h1 className="font-bold text-dark text-xl">Alamat : <span className="font-semibold text-dark italic text-italic  text-xl" >{auth.user.address ? auth.user.address : "Tidak Diketahui"}</span> </h1>
                        </div>
                    </div>
                    <div className="px-3 py-5">
                        <h1>HISTORY</h1>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 py-3">
                        {products.data.length > 0 && products.data.map(item => <Card key={item.id} product={item} />)}
                            {/* < CardCoco/> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}
export default ProfilPembeliPage;