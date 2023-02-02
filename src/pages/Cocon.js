import React, { Fragment, useState,useEffect } from "react";

// import link
import MyNavbar from "../component/LandingPage/Navbar";
import CardCoco from "../component/CocoPage/Card/Card";
import JumbrotonCoco from "../component/CocoPage/Jumbroton/Jumbroton";
import CardCocoArticle from "../component/CocoPage/Card/ArticleCocoCard";
import Footer from "../component/LandingPage/Footer";

// carosoul
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getProdukType, getListProdukType } from "../slices/productSlice"

// redux
import { getListArticle } from "../slices/articleSlice";
import { useDispatch, useSelector } from 'react-redux';

const CenteredCarousel = () => {
    const params = {
      className: " overflow-hidden ",
      centerMode: true,
      infinite: true,
      centerPadding: "400px",
      slidesToShow: 1,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 4000,
    };
  
    const paramsMobile = {
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };

    return (
        <Fragment>
          <div className="py-6 max-w-screen-2xl  hidden md:block">
            <Slider {...params}>
              <div className=" ">
                <img className=' px-2 rounded-3xl' src='/assets/image/pot.png' alt='banner' />
              </div>
              <div>
                <img className=' px-2 rounded-3xl' src='/assets/image/batok.png' alt='banner' />
              </div>
              <div>
                <img className=' px-2 rounded-3xl' src='/assets/image/batok.png' alt='banner' />
              </div>
            </Slider>
          </div>
          
          <div className="md:hidden overflow-hidden z-10">
            <Slider {...paramsMobile}>
              <div>
                <img className='w-full' src='/assets/image/batok.png' alt='banner' />
              </div>
              <div>
                <img className='w-full' src='/assets/image/batok.png' alt='banner' />
              </div>
            </Slider>
          </div>
        </Fragment>
      );
    };

function CoconutsPage() {
  const [produkTypeId, setProductTypeId] = useState('');
  const [listArticle, setListArticles] = useState ([])
  const { article, product } = useSelector(state => state);
  const dispatch = useDispatch();

  let typeId=1;

  // Article === ///

  useEffect(() => {
    dispatch(getListArticle());
  }, [dispatch]);

  useEffect(() => {
    setListArticles(article.listArticle.data);
  }, [article]);

  // === ///

  // Type 1
  useEffect(() => {
    dispatch(getProdukType({
      id : typeId
    }));
  console.log("id",produkTypeId)
}, [dispatch]);

useEffect(() => {
  setProductTypeId(product.productsType.product);
}, [product]);

// 
    return(
        <Fragment>
            <div className="relative">
                <MyNavbar/>
                <JumbrotonCoco/>
                <CenteredCarousel />
                <div className="bg-gradient-to-br shadow-md from-[#2EB51F40]">     
                    <div className=" mx-8 ">
                        <div className="flex justify-between">
                            <h1 className="text-lg text-black-500 font-semibold">Products</h1>
                            <h1 className="text-lg text-primary font-semibold">See All</h1>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 py-3">
                        {
                                    produkTypeId ? (
                                      produkTypeId.map((item) => 
                                    // <div className="snap-x w-screen h-screen overflow-scroll bg-white snap-mandatory">
                                        // <div className="mx-2 my-3">
                                            <CardCoco key={item.id} product={item} />
                                        // </div>
                                    //   </div>
                                    )
                                ) : (
                                    <div className='w-[90vw] text-center md:text-start'>
                                    <p className='mt-20 text-lg font-bold'>Produk Kosong</p>
                                    </div>
                                )
                                }
                        </div>
                    {/* <Diskon/> */}
                    <div className="pb-8">
                      <h1 className="text-lg text-black-500 font-semibold pb-3">Blogs</h1>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {console.log("bawaj",listArticle)}
                        {
                          listArticle ? (
                            listArticle.map((item)=>
                            <CardCocoArticle key={item.id} article={item}/>
                            
                            )
                          ) : (
                            <div className='w-[90vw] text-center md:text-start'>
                            <p className='mt-20 text-lg font-bold'>Blog Kosong</p>
                            </div>
                          )
                        }
                        {/* <CardCocoArticle/> */}
                      </div>
                    </div>
                    </div>
                </div>
                
                <Footer/>
            </div>

        </Fragment>
    )
}
export default CoconutsPage;