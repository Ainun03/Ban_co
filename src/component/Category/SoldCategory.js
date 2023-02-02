import React from 'react';
import Card from '../LandingPage/Card/Card';

// Redux
import { useSelector } from 'react-redux';

const SoldCategory = () => {
  const { products } = useSelector(state => state.product);
  const soldProduct = products.data.filter(item => item.productStatus === true);

  return (
    <>
      {soldProduct.length > 0 ? (<div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {soldProduct.length > 0 && soldProduct.map(item => <Card key={item.id} product={item} />)}
      </div>) : (<div className='flex justify-center'>
        <img className='mt-10 md:mt-0' src='/assets/image/not-found.png' alt='Not Found' />
      </div>)}
    </>
  );
};

export default SoldCategory;