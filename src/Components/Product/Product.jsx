import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ items }) => {
    const {product_image,product_title,price,product_id} = items

    return (
        <div className="card bg-base-100 w-72 h-80 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={product_image}
                    alt="items"
                    className="rounded-xl w-36 h-36" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className=" text-md">{product_title}</h2>
                <p className='text-sm'>Price:{price}</p>
                <div className="card-actions">
                    <Link to ={`/products/:${product_id}`}><button  className="p-2 bg-slate-600 hover:bg-gray-50 rounded-md">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = { 
    items: PropTypes.object

};

export default Product;