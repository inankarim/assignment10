import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';

const ProductList = ({products,category}) => {

    const filteredData = category === 'All' 
    ? products 
    : products.filter((product) => product.category === category);
    
    return (
       <div className='grid grid-cols-1 mx-auto md:grid-cols-2 gap-3 lg:grid-cols-3'>
        {
            filteredData.map(items => <Product key={items.product_id} items={items}></Product> )
        }
       </div>
    );
};

ProductList.propTypes = {
    producsts: PropTypes.array,
    category : PropTypes.string.isRequired
};

export default ProductList;