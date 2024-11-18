import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreWishList, getStoreWishList } from '../../Utilities/wishtodo';
import { addToCartList } from '../../Utilities/carttodo';
import { CiHeart } from "react-icons/ci";

const ProductDetails = () => {
    const { product_id } = useParams();
    const value = useLoaderData();
    const extractNumericId = (param) => parseInt(param.replace(/\D/g, ''), 10);
    const id = extractNumericId(product_id);
    


    const product = value.find(product => product.product_id === id);
    const { product_image, product_title, price, product_id: curren_id, availability, description, Specification, rating } = product
    
    const handleMarkAsWish = (id) =>{
        addToStoreWishList(id);
    }
    const handleMarkAsCart = (id,price) =>{
        addToCartList(id,price);
    }
    const storeWishList = getStoreWishList();
    
    const isWished = storeWishList.includes(curren_id);
    


    return (
        <div>
            <div className='text-center bg-[#9538E2] text-white py-20'>
                <h1 className='text-xl font-semibold'>Product Details</h1>
                <p className='text-md mt-3'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div style={{
                  background: 'linear-gradient(to bottom, #9538E2 50%, white 50%)',
                  padding: 0, 
                  margin: 0 ,
            }} >
            <div className='bg-slate-300 mb-48 flex flex-col lg:flex-row p-4 rounded w-4/5 ml-28'>
                <img src={product_image} className='w-[500px] h-[450px]' alt="" />
                <div className='text-black   mx-4'>
                    <h1 className='text-3xl font-semibold'>{product_title}</h1>
                    <p className='text-md'>Price:{'$'}{price}</p>
                    <p className='mt-1'>
                        {
                            availability ? <button className='p-1 rounded-xl bg-red-400 text-sm '>In Stock</button> : <button className='p-1 rounded-xl bg-red-400 text-sm '>Currently Unavailable</button>
                        }
                    </p>
                    <p className='text-md mt-1'>{description}</p>
                    <h6 className='text-xl font-semibold mt-1'>Specification</h6>
                    <ul className='mt-1'>
                        {
                            Specification.map((value, idx) => <li>{idx + 1}: {value}</li>)
                        }
                    </ul>
                    <div>
                        <p className='font-semibold'>Rating: </p>
                        <div className='flex'>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className='p-1 bg-white text-black rounded-3xl ml-1 mb-1'>{rating}</p>
                        </div>
                        <div className='flex gap-2'>
                            <button onClick={() =>handleMarkAsCart(curren_id,price)} className='p-1 rounded-md bg-slate-600 hover:bg-orange-300'>Add To Cart</button>
                            <button onClick={() => handleMarkAsWish(curren_id) } className='p-1 rounded-md bg-slate-600 hover:bg-orange-300' hidden={isWished}><CiHeart/></button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
    ); 
};

export default ProductDetails;