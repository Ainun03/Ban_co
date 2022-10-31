import React, { Fragment } from "react";

function JumbrotonHome() {
    return(
        <Fragment>
            <div className="bg-gradient-to-br h-full relative shadow-md from-[#2EB51F40]">
                <div className=" h-full flex overflow-hidden inset-x-6  absolute max-w-screen-2xl">
                   {/* lg:pt-40 lg:mr-12 mr-4 md:h-96 */}
                   <div className="flex items-center w-full justify-end">
                        <img  
                            className='max-w-[45%] md:max-w-[35%] ' 
                            src='/assets/image/orange2.png' alt='logo' />
                   </div>
                </div>
{/* back */}
                {/* <div className="bg-gradient-to-br h-screen shadow-md from-[#2EB51F40] w-full absolute max-w-screen-2xl">
                   <div className=" items-center h-full  justify-start">
                   </div>
                </div> */}

                <div className="container flex overflow-hidden absolute max-w-screen-2xl">
                   <div className="flex items-center md:-mt-16 -mt-10 w-full justify-start">
                        <img  
                            className='md:max-w-[17%] max-w-[20%] ' 
                            src='/assets/image/2.png' alt='pojok kiri' />
                   </div>
                </div>
                {/* flex h-screen max-w-screen-7xl */}
                <div className=" px-6 overflow-hidden absolute inset-x-px inset-y-px  ">
                   <div className="flex items-center h-full w-full ">
                        <img  
                            className='md:max-w-[10%] max-w-[20%] ' 
                            src='/assets/image/3.png' alt='tengah coret' />
                   </div>
                </div>
                {/*  h-screen max-w-screen-6xl  */}
                <div className=" mx-24 inset-px inset-y-px overflow-hidden absolute ">
                   <div className="flex items-end h-full w-full">
                        <img  
                            className='md:max-w-[20%] max-w-[40%] ' 
                            src='/assets/image/4.png' alt='lingkran' />
                   </div>
                </div>
 {/* ----- */}
                <div className=" inset-y-px inset-x-24 flex justify-start items-center h-full overflow-hidden w-100 absolute max-w-screen-3xl">
                   <div className=" backdrop-brightness-105 bg-white/10 px-6 pt-6 shadow-xl w-full md:w-auto  h-72 inset-px ">
                            <h1 className="text-3xl text-black-500 font-medium">The <span className="text-primary">Best Selling</span>
                                <br></br>
                                    fresh fruits
                                <br></br>
                                    and vegetable
                                <p className="text-sm text-black-500 font-normal pt-4">There are complete fruits and vegetables scattered throughout Indonesia</p>
                            </h1>
                            <div className="flex w-full justify-center pt-6">
                                <button type="submit" className="px-4 py-2 border-4  hover:bg-[#d9f99d] hover:border-[#d9f99d] hover:text-[#78716c] border-primary bg-primary text-white font-medium rounded-xl">
                                Order Now
                                </button>
                            </div>
                   </div>
                </div>
   
                <div className=" flex justify-end overflow-hidden" >
                    <img  
                        className='max-w-[50%] md:max-w-[40%]' 
                        src='/assets/image/Ellipse 274.png' alt='logo' />
                </div>
            </div>
            
        </Fragment>

    )
}
export default JumbrotonHome