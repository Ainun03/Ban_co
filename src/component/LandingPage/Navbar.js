import React, { Fragment,useState } from "react";


// icons
import { IoClose, IoMenu } from "react-icons/io5";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
function MyNavbar() {
  const [show, setShow] = useState(true);

    const navigation = [
        { name: 'Home', href: '#', current: true },
        { name: 'Shop', href: '#', current: false },
        { name: 'Page', href: '#', current: false },
        { name: 'Service', href: '#', current: false },
        { name: 'Contact', href: '#', current: false },
      ]
      const handleClick = () => {
        setShow(current => !current);
      };

    return(
        <Fragment>
          <div className='bg-tarnsparent  bg-white shadow md:static flex w-full z-[30] md:block md:top-0 md:z-0'>
            <div className="container mx-4 py-2 md:mx-auto  max-w-7xl md:px-4 flex md:py-4">
              <div className="w-1/3 flex items-center  "> 
                  <h1 className="text-3xl text-primary font-semibold">Ban<span className="text-black underline decoration-primary">Co</span>.</h1>
                  {/* <img 
                  // role='button' 
                  className='md:max-w-[40%] '
                  src='/assets/image/BanCo.png' alt='logo' /> */}
              </div>
              <div 
              className=" w-full justify-center flex items-center "
              >
                <div className="ml-10 flex hidden md:block items-baseline space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-primary text-white'
                          : 'text-black-300 hover:bg-primary hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="w-1/3 flex hidden md:block justify-end">
                <div className="flex flex-row">
                    <button type="preview" className=" px-4 py-2  text-center py-2 mr-4  border-2 border-primary hover:text-white hover:bg-[#79B51F] text-primary font-semibold rounded-2xl">
                      SIGN IN
                    </button>
                    <button type="submit" className=" px-4 y-2 border-2  border-primary bg-primary hover:bg-[#79B51F] text-white font-semibold rounded-2xl">
                      SIGN UP
                    </button>
                </div> 
              </div>   
              <div onClick={handleClick} className="cursor-pointer text-black-300 hover:bg-gray-100 hover:text-[#78716c] md:hidden flex border rounded-lg p-2 text-2xl">
                <IoMenu size={25} />
              </div>
          </div>
{/* mobilee  */}
            <div role='button' onClick={handleClick} className={`overlay fixed z-40 h-full w-full bg-slate-600 opacity-40 inset-x-0 cursor-default transition ease-in-out duration-700 md:translate-x-full ${show ? "hidden" : ""}`}></div>
              <div className={`fixed bg-white h-full right-0 w-1/2 z-50 md:translate-x-full p-5 ${show ? "translate-x-full transition ease-in-out duration-1000" : "transition ease-in-out duration-1000"}`}>
                <div className='title flex justify-between mb-3 items-center'>
                  <h1 className='font-bold text-primary text-base' >Ban<span className="text-black underline decoration-primary">Co</span>.</h1>
                  <button onClick={handleClick} className='hover:text-primary text-3xl'>
                    <IoClose />
                  </button>
                </div>
                <div className="flex flex-col items-baseline ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-primary text-white'
                            : 'text-black-300 hover:bg-primary hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>   
                  <div className="flex justify-center pt-4">
                    <div className="flex flex-row">
                        <button type="preview" className=" px-4 py-2  text-center py-2 mr-4  border-2 border-primary hover:text-white hover:bg-[#79B51F] text-primary font-semibold rounded-2xl">
                          SIGN IN
                        </button>
                        <button type="submit" className=" px-4 py-2 border-2  border-primary bg-primary hover:bg-[#79B51F] text-white font-semibold rounded-2xl">
                          SIGN UP
                        </button>
                    </div> 
                  </div> 
              </div>       
 {/* ----- */}
			  </div>
      </Fragment>
    )
}
export default MyNavbar