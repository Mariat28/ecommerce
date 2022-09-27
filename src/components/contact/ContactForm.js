import {AiOutlineMail } from 'react-icons/ai';
const ContactForm = () =>{
    return (
        <div className=" w-full h-full">
            <div className="text-black font-semibold uppercase flex justify-center text-lg">
                sign in
            </div>
            <div className='flex items-center'>
                <AiOutlineMail className='h-4 w-4 mr-1'></AiOutlineMail>
                <div className='w-full border-b border-gray-300 mt-2 bg-white rounded-sm flex relative items-center'>
                    <input type='text' className="p-2 block py-4 placeholder-pink-700  outline-none text-slate-700 text-sm w-full peer focus:ring-0" id="email" placeholder=" " autoComplete='off'/>
                    <label for="email" className="absolute text-sm text-slate-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-70 top-4 z-10 origin-[0] left-2.5 peer-focus:text-slate-600 peer-focus:dark:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 appearance-none">Email address</label>
                </div>
            </div>
            <div className="border-b border-gray-300 mt-2 bg-white rounded-sm flex relative items-center">
                <div className='w-full'>
                    <input type='text' className="p-2 block py-4  outline-none text-slate-700 text-sm w-full peer focus:ring-0" id="email" placeholder=" " autoComplete='off'/>
                    <label for="email" className="absolute text-sm text-slate-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-70 top-4 z-10 origin-[0] left-2.5 peer-focus:text-slate-600 peer-focus:dark:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 appearance-none">Email address</label>
                </div>
                <AiOutlineMail className='h-4 w-4 mr-1'></AiOutlineMail>
            </div>
        </div>
    )
}
export default ContactForm;