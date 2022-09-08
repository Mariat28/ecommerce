import CardComponent from "./CardComponent";
import redlipstick from '../../assets/images/sassyheroimg.png';
import lipglossHero from '../../assets/images/heroImg2.png';
import smokeyGloss from '../../assets/images/smokeyGloss.png'
import peachGloss from '../../assets/images/peachGloss.png';
import exquisiteGloss from '../../assets/images/exquisiteGloss.png';
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const productsArray =[

    {
        name: 'smokey rose',
        price: 45000,
        id: 2,
        img:smokeyGloss,
        amount: 0,
    },

    {
        name: 'orchid princess',
        price: 30000,
        id: 4,
        img:lipglossHero,
        amount: 0,

    },
    {
        name: 'ocean girl',
        price: 30000,
        id: 1,
        img: exquisiteGloss,
        amount: 0,
    },
    {
        name: 'lovely peach',
        price: 30000,
        id: 3,
        img: peachGloss,
        amount: 0,

    },
    {
        name: 'The queen',
        price: 30000,
        id: 5,
        img: exquisiteGloss,
        amount: 0,

    },
    {
        name: 'Tender',
        price: 30000,
        id: 6,
        img: peachGloss,
        amount: 0,
    }
]
const GlossContainer = () =>{
    const cartCtx = useContext(CartContext);
    function addToCartHandler (cartItem){
        cartCtx.addItem(cartItem); 
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