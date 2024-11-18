import React from 'react';
import PropTypes from 'prop-types';

function Model({ isOpen, onClose }){
    if (!isOpen) {
        return null;}
    else{
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="mt-10 flex-col gap-4 text-white">
            <div className='bg-slate-300 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
            <h2 className='text-3xl font-bold'>Congratulations!</h2>
                <p className='text-2xl font-semibold max-w-md'>Your purchase was successful!</p>
                <button onClick={onClose} className='p-1 bg-white text-black rounded-md'>Close</button>
            </div>
            </div>
        </div>
    );
}
}

Model.propTypes = {
    isOpen:PropTypes.bool,
    onClose: PropTypes.func
};

export default Model;