import veganImg from '../assets/images/vegan.png';

const ValuesContainer= () =>{
    return(
        <div className="w-full flex flex-col items-center justify-center mb-4">
            <div className="uppercase text-2xl font-semibold leading-relaxed mt-2">our values</div>
            <div className=' flex justify-between gap-2 w-1/2 mt-6'>
                <div className='flex flex-col p-2 w-1/2 items-center h-full '>
                    <div className='w-fit h-fit'>
                        <img src={veganImg}/>
                    </div>
                    <div className='leading-2 text-sm text-justify mt-2 flex flex-col gap-1 items-center justify-center'>
                        <div className='uppercase font-semibold text-lg'>vegan</div>
                        <div className='text-gray-600 text-center leading-relaxed'>
                            Our formulas are designed with ingredients to ensure the right balance between efficiency, safety and responsibility, producing formulations that are more restrictive than regulations in the US, Canada, EU and beyond.
                        </div>
                    </div>
                </div>
                <div className='flex flex-col p-2 w-1/2 items-center h-full'>
                    <div className='w-fit h-fit'>
                        <img src={veganImg}/>
                    </div>
                    <div className='leading-2 text-sm text-justify mt-2 flex flex-col gap-1 items-center justify-center'>
                        <div className='uppercase font-semibold text-lg'>clean</div>
                        <div className='text-gray-600 text-center leading-relaxed'>
                            We are vegan meaning that none of our products, packaging, formulas or ingredients contain animal derivatives or animal-by-products.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ValuesContainer; 