import ContactForm from './ContactForm';
import './Contact.css';
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
        <div className='contact-form h-96 w-96 absolute right-10 bg-pink-50 z-10 top-14 rounded-sm shadow-md '>
            <div className="flex flex-col p-2  items-center">
                <div className='flex justify-end w-full bg-pink-50'>
                    <span className=' cursor-pointer' onClick={closeForm}>&times;</span>
                </div>
                {!isSignIn && <div className="flex flex-col justify-center gap-4 w-full h-full p-2">
                    <div className="text-black font-semibold uppercase flex justify-center text-2xl">
                        Hello!
                    </div>
                    <div className="flex flex-col items-center justify-center text-sm mt-2">
                        <span>Already have an account? </span>
                        <div className="flex gap-2 mt-3">
                            <button className="bg-black text-white px-8 py-2 rounded-sm hover:bg-transparent border border-black hover:text-black uppercase text-xs" onClick={showSignIn}>sign in</button>
                            <button className="  px-8 py-2 rounded-sm bg-transparent border border-black hover:text-black text-xs uppercase">sign in</button>

                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 px-4 mt-2">
                        <span className="font-semibold">OR</span>
                        <button className=" w-full uppercase text-sm  px-8 py-2 rounded-sm hover:bg-transparent border border-black hover:text-black">create account</button>
                    </div>
                </div>}
            </div>
            <div className='p-2'>
                {isSignIn && <ContactForm></ContactForm>}
            </div>
        </div>

    )
}
export default ContactFormContainer;