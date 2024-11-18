import React from 'react';
import { addToCartList } from '../../Utilities/carttodo';
const BuyProduct = ({product,flag}) => {
    const { product_image, product_title, price, description, product_id: curren_id, } = product
    const  handleeMarkAsCart = (id,price) =>{
        addToCartList(id,price);
    }

    return (
        <div className="flex  bg-slate-300 max-w-4xl mx-auto mt-6 rounded-md items-center text-black">
            <img className='w-[150px] h-[150px]' src={product_image} alt="" />
            <div className="card-body">
                <h2 className="text-xl text-bold">{product_title}</h2>
                <p>{description}</p>
                <p>Price:{price}</p>
                {
                    flag ? '':<div className="card-actions justify-end">
                    <button onClick={() =>handleeMarkAsCart(curren_id,price)} className="btn btn-primary">Add to Cart</button>
                </div>
                }
            </div>
        </div>
    );
};

export default BuyProduct;