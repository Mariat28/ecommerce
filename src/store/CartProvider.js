import { useReducer } from 'react';
import CartContext  from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0,
}
const cartReducer = (state, action) =>{
    let updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex((item) => item.id === action.item.id);
    if(action.type === 'ADD'){
        if(state.items.indexOf(action.item) === -1) {
         updatedItems = state.items.concat(action.item);
        }
        const updatedItem = updatedItems.find((item) => item.id === action.item.id);
        updatedItem.amount += 1;
        //  const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
         const updatedTotalAmount = state.totalAmount +  action.item.price;
         return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }; 
    }
    if(action.type === 'REMOVE') {
        updatedItemIndex = updatedItems.findIndex((item) => item.id === action.item.id);
        const updatedTotalAmount = state.totalAmount - (action.item.price * action.item.amount);
        updatedItems.splice(updatedItemIndex,1);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }; 
    }
    if(action.type === 'REDUCE') {
        const oldItemObj = updatedItems[updatedItemIndex];
        const reducedAmount = oldItemObj.amount - action.newAmount;
        const updatedItemObj = {...oldItemObj, amount:action.newAmount};
        updatedItems.splice(updatedItemIndex, 1, updatedItemObj);
        const updatedTotalAmount = state.totalAmount - (action.item.price * reducedAmount);
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }
    if(action.type === 'INCREASE') {
        const oldItemObj = updatedItems[updatedItemIndex];
        const addedAmount = action.newAmount - oldItemObj.amount;
        const updatedItemObj = {...oldItemObj, amount:action.newAmount};
        updatedItems.splice(updatedItemIndex, 1, updatedItemObj);
        const updatedTotalAmount = state.totalAmount + (action.item.price * addedAmount);
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }
    return defaultCartState;
}
const CartProvider = (props) =>{
    // useReducer returns an array with the current state snapshot and a function to dispatch an action to the reducer that performs a certain effect on the state
    //it has two arguments i.e. the reducer function and initial state
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (item) =>{
        dispatchCartAction({type: 'ADD', item:item});
    }
    const removeItemFromCartHandler = (item) => {
        dispatchCartAction({type: 'REMOVE', item:item});
    }
    const reduceAmountHandler = (item, amount) =>{
        dispatchCartAction({type: 'REDUCE', item:item, newAmount:amount});
    }
    const increaseAmountHandler = (item, amount) =>{
        dispatchCartAction({type: 'INCREASE', item:item, newAmount:amount});
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        isOpen: cartState.isOpen,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        reduceAmount: reduceAmountHandler,
        increaseAmount: increaseAmountHandler,
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;