import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
   
    return (
        
            <div className='bg-[#9538E2]  m-0'>
                <div className='text-center  text-white bg-[#9538E2] p-0 m-0'>
                    <h1 className=' text-4xl bg-[#9538E2] m-0 '>Upgrade Your Tech Accessorize with <br /> Gadget heaven Accessorize</h1>
                    <p className='m-0'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                    <button className="btn btn-outline btn-success w-30 mt-5">Shop Now!</button>
                    <div style={{
                  background: 'linear-gradient(to bottom, #9538E2 50%, white 50%)',
                  padding: 0, 
                  margin: 0 ,
            }}  >
                <img className='w-[850px] h-[500px] ml-[160px] mt-[50px] p-3 bg-slate-100 rounded-md'
                 src={banner} alt="" />
            </div>
                </div>
        </div>
    );
};

export default Banner;