import React, { useState,useEffect } from 'react';
import Product from '../Product/Product';
import NewProduct from '../NewProduct/NewProduct';

const NewProducts = () => {
    const [products,setProducts] = useState([]);
    useEffect(() =>{
        fetch('./newproduct.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);
    useEffect(() => {
        document.title = 'GadgetHaven - New Product';
    }, []);
    return (
        <div>
            <div className='text-center bg-[#9538E2] text-white py-20'>
                <h1 className='text-xl font-semibold'>Upcoming Products</h1>
                <p className='text-md mt-3'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className='gap-1 my-1'>
                {
                    products.map(items => <NewProduct key={items.product_id} items={items}></NewProduct>)
                }
            </div>
        </div>
    );
};

export default NewProducts;