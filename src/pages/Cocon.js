import React, { Fragment } from "react";

// import link
import MyNavbar from "../component/LandingPage/Navbar";
import CardCoco from "../component/CocoPage/Card/Card";
import JumbrotonCoco from "../component/CocoPage/Jumbroton/Jumbroton";
import Footer from "../component/LandingPage/Footer";

// carosoul
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    return(
        <Fragment>
            <div>
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
                        <CardCoco/>
                        </div>
                    </div>
                    {/* <Diskon/> */}
                </div>
                
                <Footer/>
            </div>

        </Fragment>
    )
}
export default CoconutsPage;