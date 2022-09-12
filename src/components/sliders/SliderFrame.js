 import lipstickHero from '../../assets/images/maramar.png';
 const SliderFrame = (props) =>{
    return(
        <div className="h-[500px] relative   mt-16 flex justify-between items-center">
            <div className='h-full w-[500px]  flex items-center px-4 gap-4 bg-gray-100 skew-x-12'>
                {/* <div>
                <img src={lipglossHero} className="h-48 object-cover" />
                <img src={lipstickHero} className="h-48 object-cover" />

                </div> */}
            </div>
            <div className='absolute left-0 w-80'>
                <img src={lipstickHero} className=" w-96 h-full object-fill" />
            </div>
            {/* lipgloss image as the background */}
            {/* <div className="absolute h-full min-h-full  z-10 w-full flex flex-col items-center justify-center"> */}
                <div className="text-2xl xl:text-3xl text-white px-2 flex items-center justify-end  w-full bg-pink-300/70 h-full">
                    <div className='flex flex-col'>
                        <div className="uppercase flex justify-center font-semibold">dry lip killers</div>
                        <div className="flex flex-wrap-reverse justify-end text-lg">Everything you need to create a glossy & perfect pout.</div>
                        <div className='flex justify-center p-2 '>
                            <button className='uppercase text-sm shadow-md rounded-sm bg-black p-2 text-pink-300'><span className='hover:animate-pulse'>shop now</span></button>
                        </div>
                    </div>

                </div>
            {/* </div> */}

        </div>
    )
 }
 export default SliderFrame;