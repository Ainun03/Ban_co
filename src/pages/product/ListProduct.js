import React, { Fragment, useEffect, useState } from "react";

// component
import Card from "../../component/LandingPage/Card/Card";
// icons
import { FiSearch } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
// slice
import { getAllProduct } from "../../slices/productSlice";
// redux
import { useDispatch, useSelector } from 'react-redux';

const ListProduct = () => {
    const [products, setProducts] = useState([]);
    const { product } = useSelector(state => state);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllProduct());
      }, [dispatch]);

      useEffect(() => {
        setProducts(product.products.data);
      }, [product]);
    return(
        <Fragment>
            <div className="bg-transparent md:bg-white md:shadow w-full z-[30] md:block md:top-0 z-0">
                <div className="container mx-auto  w-full max-w-6xl px-4 flex py-4" >
                 <button  className='bg-white p-2 text-xl'>
						<AiOutlineHome />
					</button>
                {/* <h1 className="text-3xl text-primary font-semibold">Ban<span className="text-black underline decoration-primary">Co</span>.</h1> */}
                    <div className="form-search w-full bg-white md:bg-[#EEEEEE] rounded-lg ml-4 flex text-[#8A8A8A] text-sm px-6 py-2">
                        <input className='w-full text-black bg-transparent focus:outline-none' placeholder='Cari di sini ...' alt='search' />
                        <span className='my-auto text-lg'> <FiSearch /> </span>
                    </div>
                </div>
                <div className="bg-gradient-to-br shadow-md from-[#2EB51F40]">     
                    <div className=" mx-8 ">
                        <div className="list-category py-4 flex overflow-x-auto no-scrollbar text-clip">
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
                                <span>Kelapa</span>
                            </button>
                            <button className='snap-center rounded-lg flex mr-4 bg-primary text-[#3C3C3C] text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'>
                                <FiSearch className='my-auto mr-1' />
                                <span>Pisang</span>
                            </button>
                            {/* <button className='snap-center rounded-lg flex mr-4 bg-primary text-[#3C3C3C] text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'>
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
                            </button> */}
                            
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                            {
                            products ? (
                                products.map((item) => <Card key={item.data} product={item} />)
                            ) : (
                                <div className='w-[90vw] text-center md:text-start'>
                                <p className='mt-20 text-lg font-bold'>Produk Kosong</p>
                                </div>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ListProduct;