import { useContext, forwardRef, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
import {BiSort} from 'react-icons/bi';
import SortFilter from "./SortFilter";
import CardComponent from "./CardComponent";
import productsArray from './helpers/ProductData';

const GlossContainer = forwardRef((props, ref) =>{
    const [isSortContainer, setIsSortContainer] = useState(false);
    const [filterOption, setFilterOption] = useState('');
    const cartCtx = useContext(CartContext);

    function addToCartHandler (cartItem){
        cartCtx.addItem(cartItem); 
    }
    let filteredItems =[];
    if(props.search_term){
        const allProducts  = [...productsArray];
        filteredItems = allProducts.filter((product) => product.name.toLocaleLowerCase().includes(props.search_term) || (''+product.price).toLocaleLowerCase().includes(props.search_term));
    } else{
        filteredItems = [...productsArray];
        if(filterOption?.value === 'asc'){
            filteredItems.sort((a, b) => a.name.toLowerCase() - b.name.toLowerCase());
            console.log('card items changed', filteredItems);
        }
        console.log('filtered items', filteredItems);
    }

    const cardItems = filteredItems.map((item) => <CardComponent key={item.id} productData={item} onAddToCart={addToCartHandler}/>)
    const showSortItemsHandler = () =>{
        setIsSortContainer(true);
    }
    const sortProductsHandler = (option) =>{
        setIsSortContainer(false);
        setFilterOption(option.name)
        console.log('sort by', option);
        

    }

    return(
        <div className="mt-0 bg-pink-100" ref={ref}>
            <div className="px-2 text-sm uppercase text-gray-400 flex items-center justify-between">
                <span className="hover:underline hover:cursor-pointer mt-1" >lips | lip glosses</span>
                <div className="relative px-2">
                    <div className="bg-white flex items-center  mt-1 relative w-full">
                        <input type='text' value={filterOption} placeholder="sort by" className="capitalize block p-2 mt-1 outline-0  text-gray-400" onFocus={showSortItemsHandler} readOnly/>
                        <BiSort className="h-4 w-4 absolute right-0"/>
                    </div>
                    {isSortContainer && <SortFilter onFilterOptionChange={sortProductsHandler}></SortFilter>}
                </div>

            </div>
            <div className="flex justify-center w-full" >
                <div className="min-h-full mt-6 py-3 px-0 flex flex-wrap gap-2 justify-center container mx-auto w-full">
                    {cardItems}
                    {cardItems.length===0 && <div className="text-gray-700">No products match your search at the moment!</div>}
                </div>
            </div>
        </div>
    )
})
export default GlossContainer;