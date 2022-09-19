import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import { useEffect, useState } from 'react';
const ProductView = ({productData}) =>{
    const [currentImage, setCurrentImage] = useState(productData.img[0]);
    const [imageCounter, setImageCounter] = useState(0);
    const nextCounterHandler = () =>{
        if(imageCounter < productData.img.length){
            setImageCounter((prevCounter) => prevCounter+=1);
        }
    }
    const prevCounterHandler = () =>{
        if(imageCounter > 0) {
            setImageCounter((prevCounter) => prevCounter -=1 );
        }
    }
    const nextImageHandler = () => {
        if(imageCounter >= 0 && imageCounter < productData.img.length){
            productData.img.forEach(() => {
                console.log('image counter', imageCounter);
                setCurrentImage(productData.img[imageCounter])
            });
        }
    }
    useEffect(nextImageHandler, [imageCounter]);
    return(
        <div className="h-[600px]  w-full p-2">
            <div className="grid grid-cols-2 h-full gap-2">
                <div className="col-span-1">
                    <div className="flex items-center justify-between border-r border-gray-200">
                        <FaAngleLeft className={`h-6 w-6  ${currentImage === productData.img[0] ? 'text-gray-400 invisible' : 'text-gray-600 cursor-pointer'}`} disabled={currentImage === productData.img[0]} onClick={prevCounterHandler}/>
                        <img src={currentImage} className="object-cover"/>
                        <FaAngleRight className={`h-6 w-6  ${currentImage === productData.img[productData.img.length-1] ? 'text-gray-400 invisible' : 'text-gray-600 cursor-pointer'}`} disabled={currentImage === productData.img[productData.length - 1]} onClick={nextCounterHandler}/>
                    </div>
                    <div className='flex justify-center gap-1 p-2'>
                        {productData.img.map((img, i)=> <span className={`h-3 w-3 rounded-full p-1 ${i === imageCounter ? ' bg-gray-500/20' : 'bg-transparent shadow border border-black/50'} `}></span>)}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='flex flex-col uppercase font-semibold tracking-wide '>
                        <span className='text-2xl'>{productData.name} gloss drip</span>
                        <span className='text-sm  text-gray-600'>Juicy + high shine</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ProductView;