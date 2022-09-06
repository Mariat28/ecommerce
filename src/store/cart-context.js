import React from 'react';
const CartContext = React.createContext({
    items: [],
    addItem: () => {

    },
    removeItem: (id) =>{
        
    }

}); 
export default CartContext;