import {IoMdAdd} from 'react-icons/io';
import {HiOutlineMinus} from 'react-icons/hi';
import { useContext } from "react";
import CartContext from '../../store/cart-context';

const CartItem = ({cartItem}) =>{
    const productCost = cartItem.price * cartItem.amount;
    let cartItemAmount = cartItem.amount;
    const cartCtx = useContext(CartContext);
    const removeCartItemHandler = () =>{
        cartCtx.removeItem(cartItem);
    }
    const reduceAmountHandler = () =>{
        if(cartItemAmount !== 0 ) {
            cartItemAmount = cartItemAmount-1;
            cartCtx.reduceAmount(cartItem, cartItemAmount)
        }
    }
    const IncreaseAmountHandler = () =>{
            cartItemAmount = cartItemAmount+1;
            cartCtx.increaseAmount(cartItem, cartItemAmount)
    }
    return(
        <div className="pt-2 pb-4 px-4 h-40 border-b">
            {/* <div className="flex items-center gap-3 justify-end">
                <div className="uppercase text-sm">ORCHID LIP GLOSS</div>
                <span className="capitalize text-xs text-gray-500 cursor-pointer hover:underline">remove</span>
            </div> */}
            <div className="flex py-2 h-full gap-2">
                <div className='h-full border-r border-t w-32'>
                    <img src={cartItem.img[0]} className="object-cover h-full shadow-sm" alt="product img"/>
                </div>
                <div className="flex flex-col h-full w-full text-sm justify-between">
                    <div>
                        <div className='flex justify-between items-center w-full'>
                            <span className='uppercase'>{cartItem.name}</span>
                            <span className="capitalize text-xs text-gray-500 cursor-pointer hover:underline" onClick={removeCartItemHandler}>remove</span>
                        </div>
                        <div className='mt-1 text-gray-600'>
                         <span className='text-sm'>Ush {cartItem.price}</span>
                            {/* {cartItem.amount >0 && <span className='text-sm'>Ush {productCost}</span>} */}
                        </div>
                    </div>

                    <div className='flex gap-2 items-center'>
                        {/* {cartItem.amount >0 && <span className='text-sm'>Ush {productCost}</span>} */}
                        <div className='rounded-full border w-32 flex gap-2 items-center p-2 justify-between'>
                            <IoMdAdd className="h-4 w-4 cursor-pointer" onClick={IncreaseAmountHandler}></IoMdAdd>
                            <span>{cartItem.amount}</span>
                            <HiOutlineMinus className="h-4 w-4 cursor-pointer" onClick={reduceAmountHandler}></HiOutlineMinus>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartItem;