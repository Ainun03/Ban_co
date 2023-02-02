import React, { Fragment } from "react";

import { useNavigate, useParams } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';

function Modal({ strDrinkThumb, strDrink, price }){
    const { id } = useParams();

    const { product } = useSelector(state => state);
    const productData = product.products.data.find(i => i.id == id);

    console.log(productData)
    return(
        <Fragment>
            <div className='modal-body'>
                <h1 className='font-medium text-sm mb-4'>Masukkan Jumlah Barang</h1>
                <p className='text-sm text-neutralGray'>
                    {/* Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual. */}
                </p>
                <div className='modal-product mb-4 p-4 bg-[#EEEEEE] rounded-2xl flex'>
                    {/* <img className='w-14 rounded-xl' src={productData ? productData.strDrinkThumb : 'https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg'}  alt='produuct' /> */}
                    <img className='w-14 rounded-xl' src='https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg'  alt='produuct' />
                    <div className='info-product ml-3 my-auto'>
                        <strong className='font-medium text-sm'>{productData ? productData.specificType : 'Undefined'}</strong>
                        <h3 className='text-sm'>{
                            productData ? new Intl.NumberFormat('id-ID',
                                { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                            ).format(20000) : 'Free'
                        }</h3>
                    </div>
                </div>
                <div className='price mb-4'>
                    <label>
                        <h2 className='text-xs'>Penjualr</h2>
                        <div className='rounded-2xl shadow-main'>
                            <input
                                value={20000}
                                // onChange={(e) => setCurrentOffer({ ...currentOffer, offerPrice: e.target.value })}
                                className='border-none focus:outline-none w-full text-black bg-transparent px-4 py-2'
                                placeholder='Rp 0,00' />
                        </div>
                    </label>
                </div>
                <button className='rounded-2xl bg-primary hover:bg-lime-400 w-full py-3 text-white text-sm font-medium'>
                    Kirim
                </button>
                </div>
        </Fragment>
    )
}
export default Modal