import React, { Fragment } from "react";

import { useNavigate, Link } from 'react-router-dom';

function KetBan() {

    const navigate = useNavigate();

    return(
        <Fragment>
            <div className=" h-full py-12 ">
                <div className="container grid grid-cols-1 md:grid-cols-1  mx-auto px-4 flex flex-col">
                    <div className="flex flex-row-reverse justify-start gap-8">
                            <div className="hover:translate-y-6 shadow-main shadow-slate-700 ">
                                <img  
                                className='w-32 md:w-48 lg:w-64' 
                                src='/assets/image/sang.png' alt='lingkran' />
                            </div>
                            <div className="text-end w-[35%] flex flex-col h-full  ">
                                <h1 className="text-4xl text-black-500 font-bold">Pisang</h1>
                                <p className="text-lg text-justify text-black-500 font-normal pt-4">Merupakan Gunung dengan ketinggian mencapai 2.438 mdpl ini terletak di Sumatera Barat. Gunung ini menjadi yang tertinggi ke tiga belas di Sumatra Barat, Indonesia.</p>
                                
                                <div className="flex w-full items-end h-full items-end  justify-end pt-6">
                                    <button type="submit" onClick={() => navigate('/banana')} className="px-4 py-2 border-2 border-primary hover:text-white hover:bg-[#79B51F] text-primary font-medium rounded-xl">
                                        Selengkapnya
                                    </button>
                                </div>
                            </div>
                    </div>
                    <div className="flex flex-row justify-start pt-20 gap-8">
                            <div className="row-span-3 hover:-translate-y-6 shadow-main shadow-slate-700 ">
                                <img  
                                className='w-32 md:w-48 lg:w-64' 
                                src='/assets/image/sang.png' alt='lingkran' />
                            </div>
                            <div className="flex texy-start flex-col h-full w-[35%] ">
                                <h1 className="text-4xl text-black-500 font-bold ">Kelapa</h1>
                                <p className="text-lg text-black-500 font-normal text-justify pt-4">Merupakan Gunung dengan ketinggian mencapai 2.438 mdpl ini terletak di Sumatera Barat. Gunung ini menjadi yang tertinggi ke tiga belas di Sumatra Barat, Indonesia.</p>
                                
                                <div className="flex w-full h-full items-end  justify-start">
                                    <button type="submit" onClick={() => navigate('/kelapa')} className="px-4 py-2 border-2 border-primary hover:text-white hover:bg-[#79B51F] text-primary font-medium rounded-xl">
                                        Selengkapnya
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default KetBan