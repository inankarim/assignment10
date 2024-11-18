import React from 'react';


const NewProduct = ({items}) => {
    const {product_image,product_title,price,product_id,description,Specification,rating} = items
    return (
        <div className='bg-slate-300 mb-10 flex flex-col lg:flex-row p-4 rounded w-4/5 ml-28'>
                <img src={product_image} className='w-[500px] h-[450px]' alt="" />
                <div className='text-black   mx-4'>
                    <h1 className='text-3xl font-semibold'>{product_title}</h1>
                    <p className='text-md'>Price:{'$'}{price}</p>
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
                    </div>
                </div>
            </div>
    );
};

export default NewProduct;