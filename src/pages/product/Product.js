import React, { Fragment,useState } from "react";

import Modal from "../../component/modal/Modals";
// Icons
import { IoClose, IoChevronBackCircle } from 'react-icons/io5';
// redux
import { useNavigate, useParams } from 'react-router-dom';

import {  useSelector } from 'react-redux';

function Product() {
    const [showModal, setShowModal] = useState(true);

	const modalClick = () => {
		setShowModal(current => !current);
	};
    
    // Get Params
	const { id } = useParams();
    // Redux
	const { product } = useSelector(state => state);


	
    const productData = product.products.data.find(i => i.id == id);
	

    const navigate = useNavigate();

	console.log(productData.productTypeId);
    return(
        <Fragment>
            <div className="relative">
                {/* Modal */}
			<div className='modal'>
				<div className={`fixed overlay bg-black opacity-50 z-[999] h-full w-full inset-x-0 cursor-default transition ease-in-out duration-[850ms] ${showModal ? "hidden" : ""}`}>
				</div>
				<div className={`fixed top-[85%] md:top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-b-none rounded-t-2xl md:rounded-2xl z-[999] w-full h-full md:h-auto md:w-[360px] p-8 transition ease-in-out duration-700 ${showModal ? "translate-y-[100%] md:scale-0" : ""}`}>
					<div className='flex justify-end text-3xl -mt-5 md:-mt-0 mb-6 md:mb-0'>
						<img role='button' onClick={modalClick} className='mx-auto md:hidden' src='/assets/image/mobile-modal.png' alt='mobile-modal' />
						<IoClose className='hidden md:block' role='button' onClick={modalClick} />
					</div>
					{/* <Modal strDrinkThumb={productData.strDrinkThumb[0]} specificType={productData.specificType} price={20000} /> */}
					<Modal src='https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg' specificType={productData.specificType} price={20000} />
					{/* <button onClick={maClick} className='rounded-2xl bg-primary hover:bg-[#7126B5CC] w-full py-3 text-white text-sm font-medium'>
						Kirim
					</button> */}
				</div>
			</div>
            {/* modal end */}
            <div className='bg-transparent absolute z-10'>
				<IoChevronBackCircle className='m-3 cursor-pointer' size={30} color={'#E2D4F0'} onClick={() => navigate('/')} />
			</div>
            <div className='container mx-auto max-w-4xl pt-0 pb-20 md:py-7 relative'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-x-0 md:gap-6'>
					{/* Carousel */}
					<div className='col-span-2 '>
                    <img  src='/assets/image/sang.png' alt='product'/>
					</div>
					{/* End Carousel */}
					<div className='-mt-14 md:mt-0 md:static relative container mx-auto max-w-sm md:max-w-none md:mx-0'>
						<div className='mb-6'>
							<div className='shadow-main rounded-2xl p-4 md:mb-0 bg-white'>
								<h1 className='font-semibold mb-2'>{
									productData ? productData.specificType : 'Undefined'
								}</h1>
								{/* <h3 className='text-sm text-neutralGray mb-4'>{
									productData ? (productData.categories.strAlcoholic).charAt(0).toUpperCase() + (productData.categories.categoryName).slice(1).toLowerCase() : 'Undefined'
								}</h3> */}
								<h2 className='font-medium md:mb-6'>{
									productData ? new Intl.NumberFormat('id-ID',
										{ style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
									).format(20000) : 'Free'
								}</h2>
                                <div className='btn hidden md:block'>
                                    <div className='wrap-btn'>
									<button  onClick={navigate(`/update-produk/${productData.productId}`)} className='bg-primary hover:bg-lime-400 text-white w-full rounded-2xl py-[10px] text-sm transition ease-in-out duration-300 disabled:opacity-40'>
										Edit
									</button>
									</div>
                                </div>
							</div>
						</div>
						<div className=''>
							<div className='shadow-main rounded-2xl p-4 flex'>
								<img className='w-12 h-12 rounded-md' src="/assets/image/BanCo.png" alt='profile' />
								<div className='info-profile ml-4'>
									{/* <strong className='text-sm font-medium'>{productData ? (productData.users.username).charAt(0).toUpperCase() + (productData.users.username).slice(1).toLowerCase() : 'Anonymous'}</strong> */}
									<strong className='text-sm font-medium'>Anonymous</strong>
									<p className='text-xs text-neutralGray'>Banyuwangi</p>
									{/* <p className='text-xs text-neutralGray'>{productData ? (productData.users.city).charAt(0).toUpperCase() + (productData.users.city).slice(1).toLowerCase() : 'Anonymous'}</p> */}
								</div>
							</div>
						</div>
					</div>
					<div className='col-span-2 container mx-auto max-w-sm md:max-w-none md:mx-0 mt-6 md:mt-0'>
						<div className=' shadow-main rounded-2xl p-4'>
							<h1 className='font-medium text-sm mb-3'>Deskripsi</h1>
							<p className='text-neutralGray text-sm mb-4'>
								{/* Deskripsi Produk ...... */}
								{productData ? productData.description : 'No Description'}
							</p>
						</div>
					</div>
                    {/* button mobile */}
                    <div className='md:hidden fixed w-full bottom-5 grid px-5'>
					
						<button  onClick={navigate(`/update-produk/${productData.id}`)} className='bg-primary hover:bg-lime-400 text-white w-full rounded-2xl py-[10px] text-sm transition ease-in-out duration-300 disabled:opacity-40'>
							Edit
						</button>


					</div>
				</div>
			</div>
            </div>
        </Fragment>
    )
}
export default Product