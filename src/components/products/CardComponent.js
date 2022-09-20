import redlipstick from '../../assets/images/redlipstick.jpg';
import { AiFillStar, AiOutlineStar, AiOutlineEye } from 'react-icons/ai';
import {useState} from 'react';

const CardComponent = ({productData, onAddToCart, onViewProduct}) => {
    const [currentImage, setCurrentImage] = useState([productData.img[0]]);
    const [isHover, setIsHover] = useState(false);
    const mouseOverHandler = (event) =>{
        event.stopPropagation();
        setCurrentImage(productData.img[1]);
        setIsHover(true);
    }
    const mouseOutHandler = (event) =>{
        setIsHover(false);
        setCurrentImage(productData.img[0]);
        event.stopPropagation();
    }
    const addToCart = () => {
        onAddToCart(productData);
    }
    const viewProductHandler = () =>{
        onViewProduct(productData);
    }
    return(
        <div className="w-80 h-[450px] shadow-md rounded-br-3xl rounded-tl-3xl">
            <div className="h-72 border-b w-full  relative" onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
                {isHover && 
                    <div className='flex bg-black/20 z-20 justify-end items-end text-white uppercase p-2 rounded-sm absolute inset-0' >
                        <button className='bg-black text-pink-300 uppercase shadow-xl p-1 text-sm rounded-sm flex gap-1  h-fit items-center  text-center' onClick={viewProductHandler}>
                            <AiOutlineEye className='h-4 w-4'/>
                            <span className='hover:font-semibold'>view</span>
                        </button>
                    </div>
                }
                <img src={currentImage}  className={`max-h-full  w-full  object-cover  ${isHover? 'animate-fade' : '' }`} />
            </div>
            <div className='mt-1 flex flex-col items-center text-sm gap-1'>
                <div className='flex justify-center uppercase'>{productData.name}</div>
                <div className='text-gray-500 capitalize'>moisturizing + glossy finish</div>
                <div className='text-gray-500 capitalize'>Ush {productData.price}</div>
                <div className='flex justify-center gap-2 items-center'>
                    <div className='flex'>
                        {productData.reviews >= 300 && Array.from({length: 5}, ((_, i)=> <AiFillStar key={i}></AiFillStar>))}
                        {(productData.reviews >= 100 && productData.reviews < 300)  && Array.from({length: 3}, ((_, i)=> <AiFillStar key={i}></AiFillStar>))}
                        {productData.reviews < 100 && Array.from({length: 2}, ((_, i)=> <AiFillStar key={i}></AiFillStar>))}
                        {productData.reviews <= 50 && Array.from({length: 3}, ((_, i)=> <AiOutlineStar key={i}></AiOutlineStar>))}
                        {(productData.reviews >= 100 && productData.reviews < 300)  && Array.from({length: 2}, ((_, i)=> <AiOutlineStar key={i}></AiOutlineStar>))}
                    </div>
                    <span>({productData.reviews})</span>
                </div>
                <div className='w-full px-2'>
                    <button type='submit' className='border rounded-sm border-gray-400 bg-pink-50 w-full mt-1 bg-transparent hover:bg-black hover:text-white p-3 uppercase text-xs text-gray-500' onClick={addToCart}>add to bag</button>
                </div>
            </div>
        </div>
    )
}
export default CardComponent;