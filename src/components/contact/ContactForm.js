import {AiOutlineMail, AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
import { useRef, useState } from 'react';

const ContactForm = () =>{
    const[passwordVisible, setIsPasswordVisble] = useState(false);
    const passwordRef = useRef();
    const showPasswordHandler = () =>{
        setIsPasswordVisble((prevVisibility) => !prevVisibility);
    }
    return (
        <div className=" w-full h-full flex flex-col justify-start">
            <div className="p-2 flex flex-col">
                <span className='capitalize text-black font-semibold  text-lg'>log in</span>
                <span className='text-slate-500 text-xs'>Enter your credentials to access your account.</span>
            </div>
            <div className='mt-2'>
                <button className=" w-full  text-sm justify-center items-center flex gap-2 bg-pink-100 shadow px-8 py-2 rounded-sm  ">
                    <FcGoogle></FcGoogle>Log In with Google 
                </button>
            </div>
            <div className='flex justify-between text-sm text-slate-500 items-center gap-2 mt-3'>
                <hr className='w-full'/>
                <span>OR</span>
                <hr className='w-full'/>
            </div>
            <div className='mt-2'>
                <div className="border-b border-gray-300 mt-0 bg-white rounded-sm flex relative items-center">
                    <div className='w-full'>
                        <input type='text' className="p-2 block py-4  outline-none text-slate-700 text-sm w-full peer focus:ring-0" id="email" placeholder=" " autoComplete='off'/>
                        <label htmlFor="email" className="absolute text-sm text-slate-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-70 top-4 z-10 origin-[0] left-2.5 peer-focus:text-slate-600 peer-focus:dark:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 appearance-none">Email address</label>
                    </div>
                    <AiOutlineMail className='h-4 w-4 mr-1'></AiOutlineMail>
                </div>
                <div className="border-b border-gray-300 mt-2 bg-white rounded-sm flex relative items-center">
                    <div className='w-full'>
                        <input type={!passwordVisible ? 'password' : 'text'} ref={passwordRef} className="p-2 block py-4  outline-none text-slate-700 text-sm w-full peer focus:ring-0" id="password" placeholder=" " autoComplete='off'/>
                        <label htmlFor="password" className="absolute text-sm text-slate-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-70 top-4 z-10 origin-[0] left-2.5 peer-focus:text-slate-600 peer-focus:dark:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 appearance-none">Password</label>
                    </div>
                    {!passwordVisible && <AiOutlineEye className='h-4 w-4 mr-1 cursor-pointer' onClick={showPasswordHandler}></AiOutlineEye>}
                    {passwordVisible &&<AiOutlineEyeInvisible className='h-4 w-4 mr-1 cursor-pointer' onClick={showPasswordHandler}></AiOutlineEyeInvisible>}
                </div>
            </div>
            <div className='mt-2'>
                <button className=" w-full mt-2 text-sm  px-8 py-2 rounded-sm bg-black text-pink-300">Login</button>
            </div>

        </div>
    )
}
export default ContactForm;