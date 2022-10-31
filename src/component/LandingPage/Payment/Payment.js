import React, { Fragment } from "react";

// icons
import {AiOutlineClockCircle} from 'react-icons/ai'
function Payment() {
    return(
        <Fragment>
            <div className="relative  bg-gradient-to-br h-full shadow-md from-[#2EB51F40] overflow-hidden">
                <div className="text-center py-20 w-full ">
                    <h1 className="conatiner text-2xl text-black-500 font-bold">Why Banco?</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 pt-8 mx-4 ">
                        <div className="flex-col text-center">
                            <div className="flex justify-center">
                                <AiOutlineClockCircle size={60}/>
                            </div>
                            <div className="pt-6">
                                <h1 className="text-2xl tracking-wide text-black-500 font-bold">Easy To Order</h1>
                                <div className="flex pt-2 justify-center ">
                                    <p className="text-sm w-44 text-black-500 font-normal">Here you will get fresh local fruits and vegetables at affordable prices</p>
                                </div>
                            </div>         
                        </div>
                        <div className="flex-col ">
                            <div className="flex justify-center">
                                <AiOutlineClockCircle size={60}/>
                            </div>
                            <div className="pt-6">
                                <h1 className="text-2xl tracking-wide text-black-500 font-bold">Fast and Easy Payment</h1>
                                <div className="flex pt-2 justify-center ">
                                    <p className="text-sm text-black-500 w-44 font-normal">Here you will get fresh local fruits and vegetables at affordable prices</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col ">  
                            <div className="flex justify-center">
                                <AiOutlineClockCircle size={60}/>
                            </div>
                            <div className="pt-6">
                                <h1 className="text-2xl tracking-wide text-black-500 font-bold">Fastest Delivey</h1>
                                <div className="flex pt-2 justify-center">
                                    <p className="text-sm w-44 text-black-500 font-normal">Here you will get fresh local fruits and vegetables at affordable prices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Payment;