import redlipstick from '../../assets/images/redlipstick.jpg';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
const CardComponent = ({productData, onAddToCart}) => {
    function addToCart  (){
        onAddToCart(productData);
    }
    return(
        <div className="w-80 h-[450px] shadow-md">
            <div className="h-72 border-b w-full ">
                <img src={productData.img} className="max-h-full w-full h-full object-cover"/>
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