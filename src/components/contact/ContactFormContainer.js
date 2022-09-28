import ContactForm from './ContactForm';
import './Contact.css';
import {FcGoogle} from 'react-icons/fc';
import { useState } from 'react';
const ContactFormContainer = (props) =>{
    const [isSignIn, setIsSignIn] = useState(false);
    const closeForm = () =>{
        props.onCloseform(false)
    }
    const showSignIn = () =>{
        setIsSignIn(true);
    }
    return(
        <div className='contact-form h-96 w-96 absolute right-10 bg-pink-50 z-30 top-14 rounded-sm shadow-md '>
            <div className=" p-2 h-full items-center ">
                <div className='flex justify-end w-full bg-pink-50'>
                    <span className=' cursor-pointer' onClick={closeForm}>&times;</span>
                </div>
                {!isSignIn && <div className="flex flex-col justify-center gap-4 w-full h-full p-2 ">
                    <div className="text-black font-semibold uppercase flex justify-center text-2xl">
                        Hello!
                    </div>
                    <div className=' h-full justify-evenly flex flex-col gap-4'>
                        <div className="flex flex-col gap-2 items-center justify-center text-sm mt-2">
                            <span>Already have an account? </span>
                            <div className="flex mt-3 justify-around w-full">
                                <button className="bg-black text-white px-8 py-2 rounded-sm hover:bg-transparent border border-black hover:text-black capitalize text-xs" onClick={showSignIn}>log in</button>
                                <button className="  text-sm justify-center items-center flex gap-2 bg-pink-100 shadow px-8 py-2 rounded-sm  ">
                                    <FcGoogle></FcGoogle>Log In with Google 
                                </button>
                            </div>
                        </div>
                        <div className='text-xs flex gap-1'>
                            <span>Not yet a member of the sassy gang?</span>
                            <span className='text-blue-700 cursor-pointer hover:underline'>Create account.</span>
                        </div>
                    </div>

                </div>}
                <div className='p-2 h-5/6 '>
                    {isSignIn && <ContactForm></ContactForm>}
                </div>
            </div>

        </div>

    )
}
export default ContactFormContainer;