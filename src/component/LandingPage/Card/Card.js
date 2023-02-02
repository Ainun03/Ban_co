import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Card(props) {
    const navigate = useNavigate();
    const item = props.product;
    const { auth, product } = useSelector(state => state);
  return (
      <Fragment>
          {/* <div className='snap-x'> */}

        <div className='card hover:origin-top-left delay-300 duration-300 hover:scale-110  rounded-md p-2 shadow-main shadow-slate-700 h-52 cursor-pointer' 
        onClick={() => {
            auth.login.token ? navigate(`/update-produk/${item.id}`) : navigate('/login');
            // navigate(`/product/${item.idDrink}`)}
        }}
        // onClick={() => {
        // // Checking product seller with user logged\
        // if ((item.userId == auth.login.id && auth.login.id !== undefined)) {
        //     navigate(`/seller-product/${item.productId}`);
        // } else {
        //     navigate(`/buyer-product/${item.productId}`);
        // }
        // }}
        >
            <img className="rounded-md h-[100px] w-screen object-cover" src='/assets/image/sang.png' alt='product' />
            <div className="card-body px-2 pt-2 pb-3">
                <h3 className='font-semibold'>{ item.specificType}</h3>
                <h5 className='text-xs text-neutralGray my-1'>{item.description}</h5>
                <h3 className='font-semibold text-primary'>
                {
                    new Intl.NumberFormat('id-ID',
                    { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                    ).format(20000)
                }
                <span className='font-thin text-xs text-black'>/gram</span>
                </h3>
            </div>
        </div>
          {/* </div> */}
        {/* <div className='card hover:scale-110 rounded-md p-2 shadow-main shadow-slate-600 h-48 shadow-xl cursor-pointer' 
        // onClick={() => {
        // // Checking product seller with user logged\
        // if ((item.userId == auth.login.id && auth.login.id !== undefined)) {
        //     navigate(`/seller-product/${item.productId}`);
        // } else {
        //     navigate(`/buyer-product/${item.productId}`);
        // }
        // }}
        >
            <img className="rounded-md h-[100px] w-screen object-cover" src='/assets/image/sang.png' alt='product' />
            <div className="card-body px-2 pt-2 pb-3">
                <h3 className='font-semibold'>Fresh Local Kiwi</h3>
                <h5 className='text-xs text-neutralGray my-1'>gedang</h5>
                <h3 className='font-semibold text-primary'>
                {
                    new Intl.NumberFormat('id-ID',
                    { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                    ).format(20000)
                }
                <span className='font-thin text-xs text-black'>/gram</span>
                </h3>
            </div>
        </div> */}
      </Fragment> 
  );
}

export default Card;