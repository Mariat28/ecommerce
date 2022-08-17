import redlipstick from '../../assets/images/redlipstick.jpg';
import { AiFillStar } from 'react-icons/ai';
const CardComponent = () => {
    return(
        <div className="w-80 h-[450px] border border-gray-200">
            <div className="h-72 border-b w-full">
                <img src={redlipstick} className="max-h-full w-full object-cover"/>
            </div>
            <div className='mt-1 flex flex-col items-center text-sm gap-1'>
                <div className='flex justify-center uppercase'>ocean lip gloss</div>
                <div className='text-gray-500 capitalize'>moisturizing + glossy finish</div>
                <div className='text-gray-500 capitalize'>Ush 30000</div>
                <div className='flex justify-center gap-2 items-center'>
                    <div className='flex'>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                    </div>
                    <span>(217)</span>
                </div>
                <div className='w-full px-2'>
                    <button className='border border-gray-300 w-full mt-1 bg-transparent hover:bg-black hover:text-white p-3 uppercase text-xs text-gray-400'>add to cart</button>
                </div>
            </div>
        </div>
    )
}
export default CardComponent;