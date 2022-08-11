import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa'
import { BsBag } from 'react-icons/bs';
const Header = () => {
    return(
        <div className="h-16 bg-black text-white flex justify-between items-center px-2 absolute inset-0">
            {/* right menu  */}
            <div className=" gap-2 flex items-center w-1/2">
                <div className='lg:hidden flex'>
                    <FaBars className='h-5 w-5 text-slate-200 cursor-pointer'></FaBars>
                </div>
                <div className="2xl:text-2xl text-xl uppercase flex flex-nowrap">sassy beautie</div>
                <div className="gap-3 items-center ml-3 lg:flex hidden">
                    <span className="text-base uppercase text-pink-300 cursor-pointer hover:underline">lip glosses</span>
                    <span className="text-base uppercase cursor-pointer hover:underline">lipsticks</span>
                    <span className="text-base uppercase cursor-pointer hover:underline">best sellers</span>
                    <span className="text-base uppercase cursor-pointer hover:underline">about</span>
                </div>
            </div>

            {/* left menu  */}
            <div className="flex gap-2  w-1/2 justify-end">
                <div className="bg-white rounded-xl hidden  lg:flex text-sm gap-1 items-center p-2 text-slate-800">
                    <AiOutlineSearch className='h-5 w-5'></AiOutlineSearch>
                    <input type="search" placeholder="SEARCH" className='outline-0'/>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiOutlineUser className='h-5 w-5 cursor-pointer'></AiOutlineUser>
                    <BsBag className='h-5 w-5 cursor-pointer'></BsBag>
                </div>
            </div>
        </div>
    )
}
export default Header;