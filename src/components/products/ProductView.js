import {FaAngleLeft, FaAngleRight, FaFacebookF} from 'react-icons/fa';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {BsInstagram, BsPinterest} from 'react-icons/bs';
import {IoMdAdd} from 'react-icons/io';
import {HiOutlineMinus} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import DetailsComponent from './DetailsComponent';

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
                setCurrentImage(productData.img[imageCounter])
            });
        }
    }
    useEffect(nextImageHandler, [imageCounter]);
    return(
        <div className="h-full  w-full p-2">
            <div className="grid grid-cols-2 h-full gap-2  place-content-center">
                <div className="col-span-1">
                    <div className="flex flex-nowrap items-center justify-between border-r border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`h-6 w-6  ${currentImage === productData.img[0] ? 'text-gray-400 invisible' : 'text-gray-600 cursor-pointer'}`} disabled={currentImage === productData.img[0]} onClick={prevCounterHandler}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        <img src={currentImage} className="object-cover"/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`h-6 w-6  ${currentImage === productData.img[productData.img.length-1] ? 'text-gray-400 invisible' : 'text-gray-600 cursor-pointer animate-pulse'}`} onClick={nextCounterHandler}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <div className='flex justify-center gap-1 p-2'>
                        {productData.img.map((img, i)=> <span className={`h-3 w-3 rounded-full p-1 ${i === imageCounter ? ' bg-gray-500/20' : 'bg-transparent cursor-pointer shadow border border-black/50'} `} key={i}></span>)}
                    </div>
                </div>

                <div className="col-span-1 flex flex-col  gap-2">
                    <div className='flex flex-col gap-1 uppercase font-semibold tracking-wide '>
                        <span className='text-xl lg:text-2xl'>{productData.name} gloss drip</span>
                        <span className='text-sm  text-gray-600'>Juicy + high shine</span>
                    </div>
                    <div className='flex justify-start text-sm gap-2 items-center'>
                        <div className='flex'>
                            {productData.reviews >= 300 && Array.from({length: 5}, ((_, i)=> <AiFillStar key={i}></AiFillStar>))}
                            {(productData.reviews >= 100 && productData.reviews < 300)  && Array.from({length: 3}, ((_, i)=> <AiFillStar key={i}></AiFillStar>))}
                            {productData.reviews < 100 && Array.from({length: 2}, ((_, i)=> <AiFillStar key={i}></AiFillStar>))}
                            {productData.reviews <= 50 && Array.from({length: 3}, ((_, i)=> <AiOutlineStar key={i}></AiOutlineStar>))}
                            {(productData.reviews >= 100 && productData.reviews < 300)  && Array.from({length: 2}, ((_, i)=> <AiOutlineStar key={i}></AiOutlineStar>))}
                        </div>
                        <span>({productData.reviews})</span>
                    </div>
                    <div className='font-semibold'>
                        Ush {productData.price}
                    </div>
                    <div className='flex gap-2 items-center mt-4'>
                        <div className='rounded-full border border-gray-400 w-52 flex gap-2 items-center p-2 justify-between'>
                            <IoMdAdd className="h-4 w-4 cursor-pointer" ></IoMdAdd>
                            {/* <span>{cartItem.amount}</span> */}
                            <span>2</span>
                            <HiOutlineMinus className="h-4 w-4 cursor-pointer"></HiOutlineMinus>
                        </div>
                    </div>
                    <div className='w-full mt-4'>
                        <button type='submit' className='border rounded-sm border-gray-400  w-full xl:w-4/6 mt-1 hover:bg-transparent bg-black text-pink-300  p-3 uppercase text-xs hover:text-black'>add to bag</button>
                    </div>
                    <div className='text-xs tracking-wide leading-relaxed mt-3 text-justify'>
                        {productData.description}
                    </div>
                    <div className='flex items-center gap-2 text-xs mt-8'>
                        <span className='uppercase font-semibold text-gray-400'>share</span>
                        <BsInstagram className='h-5 w-5 cursor-pointer'></BsInstagram>
                        <FaFacebookF className='h-5 w-5 cursor-pointer'></FaFacebookF>
                        <BsPinterest className='h-5 w-5 cursor-pointer'></BsPinterest>
                    </div>
                </div>

            </div>
            <div className=''>
                <DetailsComponent title='usage' details='Apply to clean bare lips or over lipstick for a juicy, mirror-shine finish'/>
                <DetailsComponent title='key features' details={`${productData.name} is a juicy, sheer baby pink lip gloss. | Non-sticky, cushiony texture provides comfortable wear. | Instantly leaves lips feeling soft. | Delivers a glossy, mirror-shine finish. | Clean, * Vegan, Light Sweet Scent`}/>
                <DetailsComponent title='details' details='Apply to clean bare lips or over lipstick for a juicy, mirror-shine finish'/>
            </div>
        </div>
    )
}
export default ProductView;