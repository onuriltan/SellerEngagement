import React from 'react';

const Product = ({ match }) => {
  const productName= match.params.id;
  return (
    <div>
      {productName}
    </div>
  );
};

export default Product;
