import React, { Fragment } from "react";

// component
import MyNavbar from "../component/LandingPage/Navbar";
import Footer from "../component/LandingPage/Footer";
// icons
import { AiOutlineMail } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";

// router
import { useNavigate } from "react-router-dom";

function KontakPage() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="relative">
        <MyNavbar />
        <div className="bg-gradient-to-br h-full relative shadow-md from-[#2EB51F40]">
          <div className=" h-full flex p-8 overflow-hidden w-full justify-end  absolute">
            <div>
              <div className="text-right w-96">
                <h1 className="text-xl leading-normal text-black-500 font-bold">
                  Kontak
                </h1>
                <h2 className="leading-normal tracking-wider text-4xl text-black-500 font-extrabold">
                  Memiliki
                  <br />
                  <span className="text-[#2EB51F]">Pertanyaan?</span> <br />
                  Silahkan Kontak <br />{" "}
                  <span className="text-[#2EB51F]">Kami.</span>{" "}
                </h2>
                <p className="text-justify text-white">
                  {" "}
                  Jika memiliki pertanyaan mengenai jasa atau layanan kami,
                  jangan ragu untuk menanyakannya, silahkan menghubungi kontak
                  yang sudah tertera di bawah ini, kami siap menjawab pertanyaan
                  Anda.
                </p>
              </div>
              <div className="w-full cursor-pointer pt-6">
                <button
                  type="submit"
                  onClick={() => navigate("/list-product")}
                  className="px-4 py-2 border-4  hover:bg-[#d9f99d] hover:border-[#d9f99d] hover:text-[#78716c] border-[#2EB51F] bg-[#2EB51F] text-white font-medium rounded-xl"
                >
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
          {/* back */}
          <div className=" px-6 overflow-hidden absolute inset-x-px inset-y-px  ">
            <div className="flex items-center h-full w-full ">
              <img
                className="md:max-w-[10%] max-w-[20%] "
                src="/assets/image/3.png"
                alt="tengah coret"
              />
            </div>
          </div>
          {/* ----- */}
          <div className=" inset-y-px inset-x-24 flex w-2/5 justify-start items-center h-full overflow-hidden absolute max-w-screen-3xl">
            <div className="bg-white px-6 shadow-xl w-full h-72 inset-px ">
              <div className="h-full flex items-center justify-center">
                <img
                  className="md:max-w-[30%] mr-32 absolute max-w-[40%] "
                  src="/assets/image/banco-nobg.png"
                  alt="tengah logo"
                />
                <h1 className="text-4xl relative tracking-wider text-primary font-bold">
                  Ban
                  <span className="text-black underline decoration-primary">
                    Co
                  </span>
                  .
                </h1>
              </div>
            </div>
          </div>

          <div className="flex justify-end overflow-hidden">
            <img
              className="max-w-[50%] md:max-w-[40%]"
              src="/assets/image/Ellipse 274.png"
              alt="logo"
            />
          </div>
        </div>
        {/* Addres */}
        <div className=" bg-gradient-to-br h-full shadow-md from-[#2EB51F40] overflow-hidden">
          <div className="text-center py-20 w-full ">
            <div className="grid grid-cols-1 md:grid-cols-3 pt-8 mx-4 ">
              <div className="flex-col text-center">
                <div className="flex justify-center">
                  <FiMapPin
                    className="border-4 text-white bg-primary border-primary p-2 rounded-xl"
                    size={50}
                  />
                </div>
                <div className="pt-6">
                  <h1 className="text-2xl tracking-wide text-black-500 font-bold">
                    ADDRESS
                  </h1>
                  <div className="flex pt-2 justify-center ">
                    <p className="text-sm w-44 text-black-500 font-normal">
                      Unuja
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-col ">
                <div className="flex justify-center">
                  <AiOutlineMail
                    className="border-4 text-white bg-primary border-primary rounded-xl p-2"
                    size={50}
                  />
                </div>
                <div className="pt-6">
                  <h1 className="text-2xl tracking-wide text-black-500 font-bold">
                    EMAIL
                  </h1>
                  <div className="flex pt-2 justify-center ">
                    <p className="text-sm text-black-500 w-44 font-normal">
                      ainunrofiq7@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-col ">
                <div className="flex  justify-center">
                  <BsFillTelephoneFill
                    className="border-4 text-white bg-primary rounded-xl border-primary p-2"
                    size={50}
                  />
                </div>
                <div className="pt-6">
                  <h1 className="text-2xl tracking-wide text-black-500 font-bold">
                    PHONE NUMBER
                  </h1>
                  <div className="flex pt-2 justify-center">
                    <p className="text-sm w-44 text-black-500 font-normal">
                      +6282 14061 6935
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}
export default KontakPage;
