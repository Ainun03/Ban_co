import React from 'react';
import AddProductButton from '../button/AddProductButton';
import Card from '../LandingPage/Card/Card';

// Redux
import { useSelector } from 'react-redux';

const AllCategory = (props) => {
  const { products } = useSelector(state => state.product);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
      <AddProductButton />
      {products.data.length > 0 && products.data.map(item => <Card key={item.id} product={item} />)}
    </div>
  );
};

export default AllCategory;