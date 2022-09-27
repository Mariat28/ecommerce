import { useContext, forwardRef, useState, useMemo, useEffect, useCallback } from "react";
import CartContext from "../../store/cart-context";
import {BiSort} from 'react-icons/bi';
import SortFilter from "./SortFilter";
import CardComponent from "./CardComponent";
import productsArray from './helpers/ProductData';
import ProductView from "./ProductView";

const GlossContainer = forwardRef((props, ref) =>{
    const [isSortContainer, setIsSortContainer] = useState(false);
    const [filterOption, setFilterOption] = useState({name: 'ascending (A-Z)', value: 'asc'});
    const [isProductView, setIsProductView] =useState(false);
    const [currentProduct, setCurrentProduct] = useState({});
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const cartCtx = useContext(CartContext);

    const fetchProductsHandler = useCallback(async () =>{
        setError(null);
        try{
            const response = await fetch('https://sassy-webapp-default-rtdb.firebaseio.com/products.json');
            if(!response.ok) {
                throw new Error('ooopss! an error occured');
            }
            const data = await response.json();
            console.log('firebase products', data);
            setProducts(data);
        }catch(error){
            setError(error.message)
        }
    },[]);
    useEffect( () =>{
        fetchProductsHandler();
        console.log('firebase products', products);
    }, []);
    function addToCartHandler (cartItem){
        cartCtx.addItem(cartItem); 
    }
    const showSortItemsHandler = () =>{
        setIsSortContainer(true);
    }
    const sortProductsHandler = (option) =>{
        setFilterOption(option)
        setIsSortContainer(false);
    }
    const showProductView = (product) => {
        setIsProductView(true);
        setCurrentProduct(product);
    }
    const hideProductView = () =>{
        setIsProductView(false);
        setCurrentProduct({});
    }
    const { search_term } = props;
    // filter products on intial component evaluation and only if the search term changes
    const filteredItems = useMemo(() => {
        const allProducts  = [...products];
        if(search_term){
            return allProducts.filter((product) => product.name.toLocaleLowerCase().includes(props.search_term) || (''+product.price).toLocaleLowerCase().includes(props.search_term));
        } 
        if(filterOption.value === 'asc'){
            return allProducts.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);
        } else if(filterOption.value === 'desc'){
            return allProducts.sort((a, b) => (b.name.toLowerCase() > a.name.toLowerCase()) ? 1 : -1);
        }else if(filterOption.value === 'priceDesc'){
            return allProducts.sort((a, b) => (b.price > a.price) ? 1 : -1);
        }else if(filterOption.value === 'priceAsc'){
            return allProducts.sort((a, b) => (a.price > b.price) ? 1 : -1);
        }
        return allProducts;
    }, [search_term, filterOption]);

    const cardItems = filteredItems.map((item) => <CardComponent key={item.id} productData={item} onAddToCart={addToCartHandler} onViewProduct={showProductView}/>)

    return(
        <div className="mt-0 bg-pink-100 xl:h-7/8 " >
            <div className="px-2 mt-2 text-sm uppercase text-gray-400 flex items-center justify-between">
                <div className="mt-1">
                    <span className={` ${isProductView ? 'text-pink-300 hover:underline cursor-pointer': ''}`} onClick={hideProductView}>lips | lip glosses </span>
                    {isProductView && <span className="text-gray-400 no-underline"> | {currentProduct.name}</span>}
                </div>
                { !isProductView && <div className="relative px-0">
                    <div className="bg-white flex items-center  mt-1 relative w-full">
                        <input type='text' value={filterOption.name} placeholder="sort by" className="capitalize block p-2 mt-1 outline-0  text-gray-400" onFocus={showSortItemsHandler} readOnly/>
                        <BiSort className="h-4 w-4 absolute right-0"/>
                    </div>
                    {isSortContainer && <SortFilter onFilterOptionChange={sortProductsHandler}></SortFilter>}
                </div>}

            </div>
            <div className="flex justify-center w-full " ref={ref}>
                <div className="min-h-full mt-6 py-3 px-0 flex flex-wrap gap-2 justify-center container mx-auto  w-full">
                    {!isProductView && cardItems}
                    {cardItems.length===0 && <div className="text-gray-700">No products match your search at the moment!</div>}
                    {isProductView && <ProductView productData={currentProduct}/>}
                </div>
            </div>
        </div>
    )
})
export default GlossContainer;