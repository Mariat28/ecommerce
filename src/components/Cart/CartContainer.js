import { useContext } from "react";
import emptyCartIcon from '../../assets/icons/empty_cart.svg';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
const CartContainer = ({onCloseCart}) => {
    const closeCartHandler = () =>{
        onCloseCart(false);
    }
    const cartCtx = useContext(CartContext);
    const cartSize = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    return(
        <div className="h-screen bg-slate-50 fixed border-red-500  shadow-md z-20 w-96 inset-y-0 right-0">
            {/* header  */}
            <div className="flex items-center justify-between border-b p-2">
                <div className="flex items-center gap-1">
                    <span className="text-black text-xl font- uppercase">shopping cart</span>
                    <div className="rounded-full h-6 w-6 bg-pink-200 flex text-xs items-center justify-center">{cartSize}</div>
                </div>
                <div className="cursor-pointer flex items-center hover:text-pink-500 text-sm text-gray-500" onClick={closeCartHandler}>
                    <span>&times; Close</span>
                </div>
            </div>
            {/* cart items  */}
            {cartCtx.items.length === 0 &&
                <><div className="flex flex-col items-center justify-center pt-8">
                    <img src={emptyCartIcon} className="h-40 w-40" />
                    <span className="text-sm"> You have no items in your cart</span>
                </div>
                </>
            }
            {cartCtx.items.map((item) =><CartItem key={item.id}  cartItem={item}></CartItem>)}
            <div className="p-2 mt-2">
            {cartCtx.items.length === 0 && <button type='submit' className='border border-black  w-full mt-1 text-white bg-black hover:bg-transparent hover:text-black p-3 uppercase text-xs ' onClick={closeCartHandler}>shop now</button>}
            {cartCtx.items.length > 0 &&
                <div>
                    <div className="flex justify-between border-b text-sm">
                        <span className="uppercase">sub total:</span>
                        <span>Ush {cartCtx.totalAmount}</span>
                    </div>
                    <div className="flex justify-between text-base pt-2 font-semibold">
                        <span className="uppercase ">estimated total:</span>
                        <span>Ush {cartCtx.totalAmount}</span>
                    </div>
                    <span className="underline text-xs">Have  a promo code?</span>
                    <button type='submit' className='border border-black  w-full mt-3 text-white bg-black rounded-sm hover:bg-transparent hover:text-black p-3 uppercase text-xs ' >go to checkout</button>
                    <div className="w-full flex flex-col items-center justify-center text-gray-400 text-xs mt-3 leading-relaxed">
                        <span>We accept visa, mastercard, amex, PayPal, ApplePay.</span>
                        <span>Promotions and discounts applied at checkout.</span> 
                    </div>
                </div>
            }
            </div>
        </div>
    )

}
export default CartContainer;