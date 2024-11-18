import { toast } from "react-toastify";

const getStoreWishList=()=>{
    const storeWishListStr = localStorage.getItem('wish-List');
    if(storeWishListStr){
        const storeWishList = JSON.parse(storeWishListStr);
        return storeWishList;
    }
    else{
        return [];
    }

} 

const addToStoreWishList = (id) =>{
    const storeWishList = getStoreWishList();
    if(storeWishList.includes(id)){
        toast('Already Exist');
    }
    else{
        storeWishList.push(id);
        const storedListStr = JSON.stringify(storeWishList);
        localStorage.setItem('wish-List',storedListStr);
        toast("Item Added to you Wish")
    }
}

export {  getStoreWishList ,addToStoreWishList }