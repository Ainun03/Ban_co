import React, { Fragment, useState,useEffect } from "react";

import ModalRegisterPage from "./Register";
// icons
import { IoClose } from 'react-icons/io5';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

// redux
import { loginUser,getUsers } from '../../slices/authSlice';
import { getProdukType, getListProdukType } from "../../slices/productSlice"

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const LoginPage =({loginModals, checkStatus}) =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { auth, profile } = useSelector(state => state);

    const login = () => {
        setIsSubmitted(true);
        if (email !== '' && password !== '') {
          dispatch(loginUser({ email, password }))
            .unwrap()
            .then(()=>{
                dispatch(getUsers());
                dispatch(getListProdukType())
                // dispatch(getAllProduct());
            }) 
        //   dispatch(getUsers());
        //   dispatch(getUsers({ 
        //     //   email, password,
        //       token: auth.login.token
        //      }));
        }
      };

        useEffect(() => {
          if (auth.login.token) {
            // dispatch(getListArticle());
            navigate('/');
          }
        }, [dispatch, auth, navigate]);

              //   get users
    //   useEffect(() => {
    //     dispatch(getUsers({ 
    //         token: auth.login.token,
    //     }));
    //   }, [dispatch, auth]);


      
    const modalClick = () => {
		setShowModal(current => !current);
	};

    const [showAlert, setShowAlert] = useState(true);
    const alertClick = () => {
		setShowAlert(current => !current);
	};
    return(
        <Fragment>
            <div className="relative">
            <div className='modal'>
				<div className={`fixed overlay bg-black opacity-50 z-[999] h-full w-full inset-x-0 cursor-default transition ease-in-out duration-[850ms] ${showModal ? "hidden" : ""}`}>
				</div>
				<div className={`fixed top-[85%] md:top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-b-none rounded-t-2xl md:rounded-2xl z-[999] w-full h-full md:h-auto md:w-[360px] p-8 transition ease-in-out duration-700 ${showModal ? "translate-y-[100%] md:scale-0" : ""}`}>
					<div className='flex justify-between text-3xl -mt-5  mb-6 md:mb-0'>
						<img role='button' onClick={modalClick} className='mx-auto md:hidden' src='/assets/image/mobile-modal.png' alt='mobile-modal' />
						<h1 className=" text-primary font-bold">Ban<span className="text-black underline decoration-primary">Co</span>.</h1>
                        <IoClose className='hidden md:block' role='button' onClick={modalClick} />
					</div>
					<ModalRegisterPage 
                    // image={productData.imageProduct[0]} productName={productData.productName} price={productData.price} 
                    />
					{/* <button onClick={maClick} className='rounded-2xl bg-primary hover:bg-[#7126B5CC] w-full py-3 text-white text-sm font-medium'>
						Kirim
					</button> */}
				</div>
			</div>
             <div className=" bg-lime-100 h-screen shadow-md from-[#2EB51F40] overflow-hidden">
                {loginModals ? (<></>) : (
                        <div className={`alert fixed md:absolute inset-x-1/2 -translate-x-1/2 top-20 md:top-4 bg-lime-500 text-white z-[999] rounded-lg w-96 flex justify-between items-center px-5 py-2 transition ease-in-out duration-1000 ${showAlert ? 'scale-0' : ''}`}>
                            <h1 className='m-0 text-primary'>Harga tawarmu berhasil dikirim ke Penjual</h1>
                            <IoClose role='button' onClick={alertClick} className='text-lg' />
                        </div>
                    )}

                    <div className="grid mx-36 max-w-screen-xl grid-cols-1 h-full justify-items-center items-center md:grid-cols-2  ">
                        <div className="flex-col w-64 md:w-full">
                            <div className="text-center md:text-left h-full">
                                <h1 className="text-7xl tracking-wider text-primary font-bold">Ban<span className="text-black underline decoration-primary">Co</span>.</h1>
                                <p className="tracking-tight text-xl font-semibold ">Banco. membantu anda mencari berbagai jenis pisang dan kelapa</p>
                            </div>         
                        </div>
                        <div className="flex-col w-9/12 ">
                            <div className=" border border-xl rounded-lg shadow-lg bg-white p-4">
                                <label className="block ">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-medium text-slate-700">
                                        Email
                                    </span>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="peer ... mt-1 px-3 py-3 bg-lime-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1" 
                                        placeholder="ainun@ganteng.com" />
                                        {/* <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-xs">
                                            Please provide a valid email address.
                                        </p> */}
                                        {/* {email === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Email tidak boleh kosong</span> : ''} */}

                                </label>
                                {email === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Email tidak boleh kosong</span> : ''}
                                <label>
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 pt-2 block text-lg font-medium text-slate-700">
                                        Password
                                    </span>
                                    <div className="flex  fex-grow border  border-[#D0D0D0] bg-lime-200 mt-1 pr-2  rounded-lg items-center justify-between">
                                        <input 
                                            type={isVisible ? 'text' : 'password'} 
                                            name="password" 
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder='Masukkan password'
                                            className="peer ... px-3 py-3 bg-lime-200 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1"
                                              />
                                        {
                                            isVisible ?
                                            <AiOutlineEyeInvisible
                                                onClick={() => setIsVisible(false)}
                                                size={25}
                                            /> :
                                            <AiOutlineEye
                                                onClick={() => setIsVisible(true)}
                                                size={25}
                                            />
                                        }
                                    </div>

                                    {password === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Password tidak boleh kosong</span> : ''}
                                    <button  onClick={() => login()} className="px-4 py-2 mt-4 border-2 w-full border-primary hover:border-lime-400 bg-primary hover:bg-lime-400 text-white font-semibold text-2xl rounded-xl">
                                        Login
                                    </button>
                                </label>
                                <div className="text-center pt-4">
                                    <span className=" cursor-pointer text-blue-500">Lupa Kata Sandi ?</span>
                                </div>
                                {loginModals ? (<></>) : (
                                    <div className={`alert fixed md:absolute inset-x-1/2 -translate-x-1/2 top-20 md:top-4 bg-lime-500 text-white z-[999] bg-primary rounded-lg w-96 flex justify-between items-center px-5 py-2 transition ease-in-out duration-1000 ${showAlert ? 'scale-0' : ''}`}>
                                        <h1 className='text-black'>Banco.</h1>
                                        <IoClose role='button' onClick={alertClick} className='text-lg' />
                                    </div>
                                )}
                                <div className="text-center py-2 pt-6">      
                                    <button onClick={modalClick} className="border  px-4 py-3 bg-secondary hover:bg-lime-400 text-white font-medium text-xl rounded-lg">
                                        Buat Akun Baru
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </Fragment>
    )
}
export default LoginPage;