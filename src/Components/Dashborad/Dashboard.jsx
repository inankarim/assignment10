import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreCartList } from '../../Utilities/carttodo';
import { getStoreWishList } from '../../Utilities/wishtodo';
import BuyProduct from '../BuyProduct/BuyProduct';
import Model from '../Model/Model';

const Dashboard = () => {
    const [cart, setCart] = useState([]);
    const [wish, setWish] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const data = useLoaderData();
    const navigate = useNavigate();
    useEffect(() => {
        document.title = 'GadgetHaven - Dashboard';
    }, []);
    useEffect(() => {
        const storecartList = getStoreCartList();
        console.log(storecartList);
        const cartList = data.filter(product =>
            storecartList.some(item => item.id === product.product_id)
        );

        setCart(cartList);
    }, []);

    useEffect(() => {
        const storewishList = getStoreWishList();
        const storewishListInt = storewishList.map(id => parseInt(id));
        const wishList = data.filter(product => storewishListInt.includes(product.product_id));
        setWish(wishList)

    }, [])



    useEffect(() => {
        const storecartList = getStoreCartList();
        const cartList = data.filter(product =>
            storecartList.some(item => item.id === product.product_id)
        );

        const cartListWithPrices = cartList.map(product => {
            const cartItem = storecartList.find(item => item.id === product.product_id);
            return { ...product, price: cartItem?.price };
        });

        const totalPrice = cartListWithPrices.reduce((sum, product) => sum + product.price, 0);

        setCart(cartListWithPrices);
        setTotalPrice(totalPrice);

    }, []);

    const handleSort = () => {
        const sortedCartList = [...cart].sort((b, a) => a.price - b.price);
        setCart(sortedCartList)
    };

    const handlePurchase = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setCart([]);
        setTotalPrice(0);
        setIsModalOpen(false);
        localStorage.removeItem('cart_list');
        navigate('/');
    };

    const isCartEmpty = cart.length === 0 && totalPrice === 0;
    return (
        <div>
            <div>
                <div className='text-center bg-[#9538E2] text-white py-20'>
                    <h1 className='text-xl font-semibold'>Dashboard</h1>
                    <p className='text-md mt-3'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                </div>
            </div>

            <Tabs className='bg-[#9538E2]'>
                <TabList className='bg-[#9538E2] text-center mb-9'>
                    <Tab>Cart</Tab>
                    <Tab>Wish</Tab>
                </TabList>

                <TabPanel className='bg-white'>
                    <div className='flex justify-between'>
                        <div><h1>Cart</h1></div>
                        <div className='flex gap-2'>
                            <h1>Total Price:{'$'}{totalPrice}</h1>
                            <button onClick={() => handleSort()}>Sort</button>
                            {/* <button onClick={() =>clearCart()}>Clear Data</button> */}
                            <button onClick={handlePurchase} disabled={isCartEmpty}>
                                Purchase
                            </button>
                            <Model isOpen={isModalOpen} onClose={handleCloseModal}></Model>

                        </div>

                    </div>
                    <h2>
                        {
                            cart.map(product => <BuyProduct key={product.product_id} product={product} flag={true}></BuyProduct>)
                        }
                    </h2>
                </TabPanel>
                <TabPanel className='bg-white'>
                    <h2>{
                        wish.map(product => <BuyProduct key={product.product_id} product={product} flag={false}></BuyProduct>)
                    }</h2>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default Dashboard;