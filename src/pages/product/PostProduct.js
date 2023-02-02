import React, { Fragment,useState } from "react";

import MyNavbar from "../../component/LandingPage/Navbar";
import { IoChevronBackCircle } from 'react-icons/io5';
// redux
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postProduk } from "../../slices/productSlice";

// import 'antd/dist/antd.css';

function PostProduct(){
    // const [componentSize, setComponentSize] = useState('default');
    // const onFormLayoutChange = ({ size }) => {
    //     setComponentSize(size);
    // };
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // productTypeId,productType,specificType,description
    const [isSubmitted, setIsSubmitted] = useState(false);
    // const [productTypeId, setProductTypeId] = useState('');
    const [productTypeId, setProductTypeId] = useState('');
    const [specificType, setSpecificType] = useState('');
    const [description, setDescription] = useState('');
    const { auth, profile } = useSelector(state => state);

    const postProSubmit = () => {
        setIsSubmitted(true)
        if (productTypeId !== '' && specificType !== '' && description !== '' ) {
            dispatch(postProduk({ 
              token:auth.login.token,
            //   productTypeId : parseInt(productTypeId),
            productTypeId : parseInt(productTypeId),
              specificType,
              description
          }))
              .unwrap()
              .then(()=>{
                      dispatch(postProduk());
                      navigate('/list-jual');
                  }) 
  
          
        };
    }

    return(
        <Fragment>
            {/* <MyNavbar/> */}
            <div className="relative">
                <div className='bg-transparent absolute z-10'>
                    <IoChevronBackCircle className='m-7 cursor-pointer' size={30} color={'#E2D4F0'} />
                </div>
                <div className="container mx-auto max-w-3xl pt-0 pb-20 md:py-7 relative">
                    <div className="text-center text-3xl font-semibold">
                        <h1>Post Produk</h1>
                    </div>
                    <div className="flex container  mx-auto max-w-3xl pt-3" >
				
				<div className="w-full p-6 " >
                <div className="mb-4">
						<label className="relative">
							<span className="block mb-1 text-sm font-medium text-slate-700">Pilih Produk</span>
							<select
								// onChange={(e) => handleChangeProvince && setCurrentProfil({ ...currentProfil, city: e.target.value })}
								required
                                onChange={(e) => setProductTypeId(e.target.value)}
								// value={countryId}
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
                                <option value={2}>Pisang</option>
								{/* {allProvinces.map((province) => (
									<option key={province} value={province}>
										{province}
									</option>
								))} */}

							</select>

						</label>
						{productTypeId === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan Isi Tipe Produk</span> : ''}
					</div>

                        <div className="mb-4 pt-5">
                            <label className="block">
                                <span className="block mb-1 text-sm font-medium text-slate-700">
                                    Spesifikasi
                                </span>
                                <input
                                    // value={name}
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
                                    // value={name}
                                    onChange={(e) => setDescription( e.target.value)}
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
                        onClick={() => postProSubmit()}
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
export default PostProduct;