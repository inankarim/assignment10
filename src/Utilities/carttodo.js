import { toast } from "react-toastify";

const getStoreCartList =() =>{
    const storedCartStr = localStorage.getItem('cart_list');
    if (storedCartStr){
        const cartedList =JSON.parse(storedCartStr);
        return cartedList
    }
    else{
        return [];
    }
}

const addToCartList = (id,price) =>{
    const cartedList = getStoreCartList();
    if(cartedList.some(items => items.id === id)){
        toast('Already Exist');
    }
    else{
        cartedList.push({id,price});
        const storedCartStr = JSON.stringify(cartedList);
        localStorage.setItem('cart_list',storedCartStr);
        toast('This item is added to your cart')
    }
}


export {getStoreCartList,addToCartList}