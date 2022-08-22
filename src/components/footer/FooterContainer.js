import {AiFillFacebook} from 'react-icons/ai';
import {BsInstagram, BsTwitter} from 'react-icons/bs';
import {IoLogoTiktok} from 'react-icons/io5';
import {TbWorld} from 'react-icons/tb';
const FooterContainer = () => {
    const styles ={
        height: 'calc(100vh - 800px)',
    };
    return(
        <div className=" bg-black w-full mt-2 relative" style={styles}>
            <div className="text-slate-100 uppercase font-semibold w-full flex justify-center text-xl py-2 leading-2 tracking-widest">connect with us</div>
            <div className=" w-full mt-2 border-b border-gray-50/25 pb-8">
                <div className=" container mx-auto w-ful flex  justify-evenly flex-wrap">
                    <div className="flex flex-col text-white w-fit">
                        <div className="uppercase text-sm">@sassybeautie_</div>
                        <div className="flex gap-3 items-center mt-2 ">
                            <BsInstagram  className='h-5 w-5'></BsInstagram>
                            <AiFillFacebook className='h-5 w-5'></AiFillFacebook>
                            <BsTwitter  className='h-5 w-5'></BsTwitter>
                            <IoLogoTiktok  className='h-5 w-5'></IoLogoTiktok>
                        </div>
                    </div>
                    <div className="flex flex-col text-white w-fit">
                        <div className="uppercase text-sm">@sassybeautie_</div>
                        <div className="flex gap-3 items-center mt-2 ">
                            <BsInstagram  className='h-5 w-5'></BsInstagram>
                            <AiFillFacebook className='h-5 w-5'></AiFillFacebook>
                            <BsTwitter  className='h-5 w-5'></BsTwitter>
                            <IoLogoTiktok  className='h-5 w-5'></IoLogoTiktok>
                        </div>
                    </div>
                    <div className="flex flex-col text-white w-fit">
                        <div className="uppercase text-sm">@sassybeautie_</div>
                        <div className="flex gap-3 items-center mt-2 ">
                            <BsInstagram  className='h-5 w-5'></BsInstagram>
                            <AiFillFacebook className='h-5 w-5'></AiFillFacebook>
                            <BsTwitter  className='h-5 w-5'></BsTwitter>
                            <IoLogoTiktok  className='h-5 w-5'></IoLogoTiktok>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-b border-gray-50/25 pb-8 mt-3 flex gap-2 justify-between items-center text-slate-400'>
                <div className='flex gap-3 text-xs flex-wrap  p-6'>
                    <span>Privacy Policy</span>
                    <span>Terms of use</span>
                    <span>Accessibility Policy</span>
                    <span>Terms and Conditions</span>
                    <span>Cookie Settings</span>
                    <span>Cookie Policy</span>
                </div>
                <div className='text-xs text-center'>
                    Copyright &copy; 2022. Sassy Beautie Operations. All rights reserved.
                </div>
                <div className='text-xs text-center flex items-center gap-1 pr-4'>
                    <TbWorld className='h-6 w-6'></TbWorld>
                    Made in Uganda
                </div>
            </div>
            <div className='w-full p-4  absolute bottom-0'>
                <div className='grid grid-cols-2 w-full'>
                    <div className='text-slate-400 col-span-2 lg:col-span-1 text-sm flex flex-col gap-2 justify-center  border-r border-slate-50/25'>
                        <span>Lip glosses</span>
                        <span>Lip sticks</span>
                        <span>Best sellers</span>
                        <span>About</span>
                    </div>
                    <div className='text-slate-400 col-span-2 lg:col-span-1 text-sm flex flex-col items-start gap-2 px-2'>
                        <div className='uppercase flex justify-center text-lg text-slate-100 leading-2 tracking-wider'>
                            sign up for our news letter!
                        </div>
                        <div className='text-center'>
                            Be notified about restock dates, discount codes, exciting news, promotions and so much more!
                        </div>
                        <div className='py-2  w-full'>
                            <input type="search" className=' 2xl:w-2/3 w-full p-2 outline-0' placeholder='Email Address'/>
                        </div>
                        <div className='w-full flex justify-start py-1'>
                            <button className='p-2 w-52 uppercase bg-pink-100 rounded-sm'>submit</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default FooterContainer;