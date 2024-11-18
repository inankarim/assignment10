import React, { useEffect, useState } from 'react';
import ProductList from '../ProductList/ProductList';

const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(() =>{
        fetch('./product.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);
    const [category,setCategory]= useState('All');
    const handlefilter = (selectcategory) =>{
        setCategory(selectcategory);
        console.log(selectcategory);
    };
    return (
        <div className='my-20 flex gap-5'>
        <div className='w-1/6 flex flex-col gap-3 p-2 bg-slate-400 rounded-md'>
            {/* buttons */}
            <button onClick={() =>handlefilter('All')} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">All</button>
            <button onClick={() =>handlefilter('Phone')}  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Phone</button>
            <button onClick={() =>handlefilter('Laptop')}  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Laptop</button>
            <button onClick={() =>handlefilter('Watch')}  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Watch</button>
            <button onClick={() =>handlefilter('Headphone')}  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Headphone</button>


        </div>
        <div className='w-84/100'>
            <ProductList products={products} category={category}></ProductList>

        </div>
    </div>
    );
};

export default Products;