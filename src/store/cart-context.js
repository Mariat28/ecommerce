import React from 'react';
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: (id) =>{},
    reduceAmount: (item, amount) =>{},
    IncreaseAmount: (item, amount) =>{}

}); 
export default CartContext;