import React, { Fragment } from 'react';

function CardCoco(props) {
    const item = props.product;

  return (
      <Fragment>
        <div className='card hover:origin-top-left hover:rotate-12  rounded-md p-2 shadow-main shadow-slate-700 h-52 cursor-pointer' 
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
                <h3 className='font-semibold'>{item.specificType}</h3>
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
      </Fragment>
  );
}

export default CardCoco;