import React, { Fragment,useState, useEffect } from "react";

import {Link, useParams} from 'react-router-dom'
import { IoChevronBackCircle } from 'react-icons/io5';

// redux
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { updateProduk } from '../../slices/productSlice';

import { updateProduk } from "../../slices/productSlice";

import { updateUsers } from "../../slices/authSlice";

const  UpdateProduk = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [productTypeId, setProductTypeId] = useState('');
    const [productType, setProductType] = useState('');
    const [specificType, setSpecificType] = useState('');
    const [description, setDescription] = useState('');
    const { auth, profile } = useSelector(state => state);


    const { id } = useParams();

    const { product } = useSelector(state => state);
    const productData = product.products.data.find(i => i.id == id);
    // console.log(productData)



    // const initialProfileState = {
    //     productType: auth.user.productType ? auth.user.productType : "",
    //     specificType:auth.user.specificType ? auth.user.specificType : "",
    //     description: auth.user.description ? auth.user.description : "",
    // };
    // const [currentProfil, setCurrentProfil] = useState(initialProfileState);

    const updateProSubmit = () => {
        setIsSubmitted(true);
        if ( specificType !== '' && description !== '' ) {
          dispatch(updateProduk({ 
              productTypeId : productData.id,
              specificType,
              description
        }))

            .unwrap()
            .then(()=>{
                navigate('/list-jual');
                }) 
        }
      };

    return(
        <Fragment>
           <div className="relative">
                <div className='bg-transparent absolute z-10'>
                    <IoChevronBackCircle className='m-7 cursor-pointer' size={30} color={'#E2D4F0'} />
                </div>
                <div className="container mx-auto max-w-3xl pt-0 pb-20 md:py-7 relative">
                    <div className="text-center text-3xl font-semibold">
                        <h1>Update Produk</h1>
                    </div>
                    <div className="flex container  mx-auto max-w-3xl pt-3" >
				
				<div className="w-full p-6 " >
                <div className="mb-4">
						{/* <label className="relative">
							<span className="block mb-1 text-sm font-medium text-slate-700">Pilih Produk</span>
							<select
								// onChange={(e) => setCurrentProfil({ ...currentProfil, productTypeId: e.target.value })}
								required
                                onChange={(e) => setProductType(e.target.value)}
								// value={currentProfil.productTypeId}
								name="productTypeId"
								className="
                                    w-full           
                                    block
                                    mt-1
                                    rounded-xl
                                    bg-gray-200    
                                    px-4 py-2             
                                    shadow-sm
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                    "  >

								<option className="" value='' disabled selected >
									Type Produk
								</option>
                                
                                <option value={1}>Kelapa</option>
   

							</select>

						</label>
						{productType === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan Isi Tipe Produk</span> : ''} */}
					</div>

                        <div className="mb-4 pt-5">
                            <label className="block">
                                <span className="block mb-1 text-sm font-medium text-slate-700">
                                    Spesifikasi
                                </span>
                                <input
                                    // value={specificType}
                                    onChange={(e) => setSpecificType( e.target.value)}
                                    type="text"
                                    name="specificType"
                                    placeholder="Nama"
                                    className=" w-full rounded-xl  px-4 py-2 bg-gray-200"
                                />

                                {specificType === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan isi specificType</span> : ''}
                            </label>
                        </div>
                        <div className="mb-4 pt-5">
                            <label className="block">
                                <span className="block mb-1 text-sm font-medium text-slate-700">
                                    Description
                                </span>
                                <input
                                    // value={description}
                                    onChange={(e) => setDescription( e.target.value)}
                                    // onChange={(e) => setCurrentProfil({ ...currentProfil, description: e.target.value })}
                                    type="text"
                                    name="description"
                                    placeholder="Nama"
                                    className=" w-full rounded-xl  px-4 py-2 bg-gray-200"
                                />

                                {description === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan Description</span> : ''}
                            </label>
                        </div>
                        <div className=" mb-4 ">
						<button type="submit" 
                        onClick={() => updateProSubmit()}
							className="px-4 w-full py-2 mr-4 border-2 hover:bg-lime-400 border-primary bg-primary text-white font-semibold rounded-xl">
							Simpan
						</button>
					</div>

                    </div>		
                    </div>
                
                </div>
            </div>

        </Fragment>
    )
}
export default UpdateProduk;