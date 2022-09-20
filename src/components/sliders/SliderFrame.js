 import lipstickHero from '../../assets/images/peachGloss.png';
 import { forwardRef } from 'react';
 const SliderFrame = forwardRef(({onScrollToClick}, ref) =>{
    const scrollToShop = () =>{
        onScrollToClick('shop');
    }
    return(
        <div className=" relative lg:h-screen h-[400px]  mt-16 flex justify-between items-center rounded-b-3xl" ref={ref}>
            <div className='h-full  flex items-center px-4 gap-4 bg-pink-300/70 w-fit'>
            <img src={lipstickHero} className=" h-full object-cover hidden lg:block" />

                {/* <div>
                <img src={lipglossHero} className="h-48 object-cover" />
                <img src={lipstickHero} className="h-48 object-cover" />

                </div> */}
            </div>
            {/* <div className='absolute left-0 w-80'> */}
                {/* <img src={lipstickHero} className=" h-full object-cover" /> */}
            {/* </div> */}
            {/* lipgloss image as the background */}
            {/* <div className="absolute h-full min-h-full  z-10 w-full flex flex-col items-center justify-center"> */}
                <div className="text-2xl xl:text-5xl xl:rounded-br-[350px] text-white px-2 flex items-center justify-center  w-full bg-pink-300/70 h-full">
                    <div className='flex flex-col'>
                        <div className="uppercase flex justify-center font-semibold">dry lip killers</div>
                        <div className="flex flex-wrap-reverse justify-end text-lg">Everything you need to create a glossy & perfect pout.</div>
                        <div className='flex justify-center p-2 '>
                            <button className='uppercase text-sm ease-out duration-300 hover:font-semibold hover:bg-pink-100 shadow-md rounded-sm bg-black px-10 py-4 text-pink-300' onClick={scrollToShop}><span className='hover:animate-pulse'>shop now</span></button>
                        </div>
                    </div>

                </div>
            {/* </div> */}

        </div>
    )
 })
 export default SliderFrame;