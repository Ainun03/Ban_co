import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

function CardCocoArticle(props) {
    const item = props.article;

  return (
      <Fragment>
        <div className='card hover:origin-top-left hover:rotate-12 bg-Primary rounded-md p-2 shadow-main shadow-slate-700 h-48 cursor-pointer' 
        // onClick={() => {
        // // Checking product seller with user logged\
        // if ((item.userId == auth.login.id && auth.login.id !== undefined)) {
        //     navigate(`/seller-product/${item.productId}`);
        // } else {
        //     navigate(`/buyer-product/${item.productId}`);
        // }
        // }}
        // 
        >
            {/* <img className="rounded-md h-[100px] w-screen object-cover" src='/assets/image/sang.png' alt='product' /> */}
            <div className="card-body px-2 pt-2 pb-3">
                {/* <h1 className='text-dark'>kok {item.description ? item.description : "kosong" } </h1> */}
                <h3 className='font-bold'>{item.title ? item.title : "kosong" }</h3>
                <h5 className='text-xs text-neutralGray my-1'>{item.description ? item.description : "kosong" } </h5>
            </div>
        </div>
        
      </Fragment>
  );
}

export default CardCocoArticle;