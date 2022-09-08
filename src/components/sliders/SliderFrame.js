 import lipstickHero from '../../assets/images/coverPic.png';
 const SliderFrame = (props) =>{
    return(
        <div className="h-96 relative  bg-pink-200 mt-16 flex justify-between items-center">
            <div className='h-full  flex items-center px-4 bg-pink-200 gap-4'>
                {/* <div>
                <img src={lipglossHero} className="h-48 object-cover" />
                <img src={lipstickHero} className="h-48 object-cover" />

                </div> */}
                <img src={lipstickHero} className="h-96 object-cover" />
            </div>
            {/* lipgloss image as the background */}
            {/* <div className="absolute h-full min-h-full  z-10 w-full flex flex-col items-center justify-center"> */}
                <div className="text-2xl xl:text-3xl text-white px-2">
                    <div className="uppercase flex justify-center font-semibold">lip glosses</div>
                    <div className="flex flex-wrap-reverse justify-end text-lg">Everything you need to create a glossy & perfect pout.</div>
                </div>
            {/* </div> */}

        </div>
    )
 }
 export default SliderFrame;