import React, { Fragment } from "react";

import { logout } from "../../../slices/authSlice";
import { clearData } from "../../../slices/userSlice";
import { useSelector, useDispatch } from 'react-redux';

import { useNavigate} from 'react-router-dom';

function Diskon(){
    const dispatch = useDispatch();
	const { auth } = useSelector(state => state);
    const navigate = useNavigate();

    return(
        <Fragment>
            <div className="py-10 ">
                <div className=" py-10 relative h-full">
                    <div className="mx-10 opacity grid grid-cols-1 shadow-xl p-8 md:grid-cols-2 backdrop-brightness-105 bg-white/10">
                        <div className="">
                            <h1 className="text-3xl text-black-500 font-medium">Get <span className="text-primary">20% Discount</span>
                                <br></br>
                                    On Your Firts
                                <br></br>
                                    Purchare
                                <p className="text-sm text-black-500 font-normal pt-4">Just Sign Up & Sign In it now to become member</p>
                            </h1>
                            <div className="flex w-full justify-start pt-6">
                            {
                                auth.login.token ? (
                                <button
                                    onClick={() => {
                                        dispatch(logout());
                                        dispatch(clearData());
                                  }}
                                 type="submit" className="px-4 py-2 border-4 hidden  hover:bg-[#d9f99d] hover:border-[#d9f99d] hover:text-[#78716c] border-primary bg-primary text-white font-medium rounded-xl">
                                Keluar
                                </button>
                                ) : (
                                    <div>
                                        <button
                                        onClick={() => navigate('/login')}
                                        type="submit" className="px-4 py-2 border-4  hover:bg-[#d9f99d] hover:border-[#d9f99d] hover:text-[#78716c] border-primary bg-primary text-white font-medium rounded-xl">
                                        Masuk
                                        </button>

                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-end">
                                <img  
                                    className='max-w-[70%]  ' 
                                    src='/assets/image/fruit.png' alt='logo' />
                        </div>
                    </div>
                    <div>
                        <div className="-z-10 px-4 overflow-hidden absolute inset-0 inset-y-px  ">
                            <div className="flex items-start  justify-end h-full w-full ">
                                <img  
                                    className='md:max-w-[10%]  max-w-[20%] ' 
                                    src='/assets/image/3.png' alt='tengah coret' />
                            </div>
                        </div>
                        <div className="-z-10 px-4 overflow-hidden absolute inset-0 inset-y-px  ">
                            <div className="flex items-end  justify-end h-full w-full ">
                                <img  
                                    className=' max-w-[30%] md:max-w-[15%] ' 
                                    src='/assets/image/4.png' alt='tengah coret' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
export default Diskon;