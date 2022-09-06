import CardComponent from "./CardComponent";
import redlipstick from '../../assets/images/sassyheroimg.png';
import lipglossHero from '../../assets/images/heroImg2.png';
import smokeyGloss from '../../assets/images/smokeyGloss.png'
import peachGloss from '../../assets/images/peachGloss.png';
import exquisiteGloss from '../../assets/images/exquisiteGloss.png';
import { useEffect } from "react";
const productsArray =[

    {
        name: 'smokey rose',
        price: '45,000',
        id: 2,
        img:smokeyGloss,
    },

    {
        name: 'orchid',
        price: '30,000',
        id: 4,
        img:lipglossHero,

    },
    {
        name: 'ocean girl',
        price: '30,000',
        id: 1,
        img: exquisiteGloss,
    },
    {
        name: 'lovely peach',
        price: '30,000',
        id: 3,
        img: peachGloss,

    },
    {
        name: 'The queen',
        price: '30,000',
        id: 5,
        img: exquisiteGloss,


    },
    {
        name: 'Tender',
        price: '30,000',
        id: 6,
        img: peachGloss,
    }
]
const cartItems = [];
const GlossContainer = ({onUpdateCart}) =>{
    function addToCartHandler (cartItem){
        cartItems.push(cartItem);
        onUpdateCart(cartItems);
        console.log('child cart items', cartItems);
    }

    const cardItems = productsArray.map((item) => <CardComponent key={item.id} productData={item} onAddToCart={addToCartHandler}/>)
    return(
        <div className="mt-2">
            <div className="px-2 text-sm uppercase text-gray-400">
                <span className="hover:underline hover:cursor-pointer">lips | lip glosses</span>
            </div>
            <div className="flex justify-center w-full" >
                <div className="min-h-full mt-6 py-2 px-0 flex flex-wrap gap-2 justify-center container mx-auto w-full">
                    {cardItems}
                </div>
            </div>
        </div>
    )
}
export default GlossContainer;