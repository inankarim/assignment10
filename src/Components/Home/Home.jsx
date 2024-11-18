import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    useEffect(() => {
        document.title = 'GadgetHaven - Home';
    }, []);

    return (
        <div>
            <Banner></Banner>
            
            <Products></Products>


        </div>
    );
};

export default Home;