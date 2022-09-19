import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa'
import { BsBag } from 'react-icons/bs';
import { useContext, useState } from 'react';
import CartContext from '../store/cart-context';
const Header = ({onShowCart, onSearchInput, onScrollToClick}) => {
    const [activeLink, setActiveLink] = useState('home');
     const searchInputChange = (e) =>{
        onSearchInput(e.target.value);
     }
    const cartCtx = useContext(CartContext);
    const cartSize = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);
    const openCartHandler = () =>{
        onShowCart(true);
    }
    const scrollToSection = (e) =>{
        console.log(e.target.innerHTML)
        if(e.target.innerHTML === 'home'){
            onScrollToClick('home');
            setActiveLink('home');
        }else if(e.target.innerHTML === 'shop'){
            onScrollToClick('shop');
            setActiveLink('shop');
        } else if(e.target.innerHTML === 'best sellers') {
            onScrollToClick('best sellers');
            setActiveLink('best sellers');
        } else if(e.target.innerHTML === 'our values') {
            onScrollToClick('values');
            setActiveLink('values');
        }
    }
    return(
        <div className="h-16 z-10 bg-pink-300/70  text-white flex justify-between items-center px-2 absolute inset-0">
            {/* right menu  */}
            <div className=" gap-2 flex items-center font-semibold">
                <div className='lg:hidden flex'>
                    <FaBars className='h-5 w-5 text-slate-200 cursor-pointer'></FaBars>
                </div>
                <div className="gap-3 items-center ml-3 lg:flex hidden text-justify">
                    <span className={`text-sm 2xl:text-sm uppercase  cursor-pointer  ${activeLink === 'home' ? "text-pink-500 underline" : ''}`} onClick={scrollToSection}>home</span>
                    <span className={`text-sm 2xl:text-sm uppercase  cursor-pointer  ${activeLink === 'shop' ? "text-pink-500 underline" : ''}`} onClick={scrollToSection}>shop</span>
                    <span className={`text-sm 2xl:text-sm uppercase  cursor-pointer  ${activeLink === 'best sellers' ? "text-pink-500 underline" : ''}`} onClick={scrollToSection}>best sellers</span>
                    <span className={`text-sm 2xl:text-sm uppercase  cursor-pointer  ${activeLink === 'values' ? "text-pink-500 underline" : ''}`} onClick={scrollToSection}>our values</span>
                    <span className="text-sm 2xl:text-sm uppercase cursor-pointer hover:underline" onClick={scrollToSection}>get in touch</span>
                </div>
            </div>
            <div className="2xl:text-2xl text-xl  uppercase flex flex-nowrap font-semibold ">sassy beautie</div>

            {/* left menu  */}
            <div className="flex gap-2   justify-end">
                <div className="bg-white rounded-md hidden  lg:flex text-sm gap-1 items-center p-2 text-slate-800">
                    <AiOutlineSearch className='h-5 w-5'></AiOutlineSearch>
                    <input type="search" placeholder="SEARCH" className='outline-0' onInput={searchInputChange}/>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiOutlineUser className='h-5 w-5 cursor-pointer'></AiOutlineUser>
                    <div className='flex justify-end'>
                        <BsBag className='h-5 w-5 cursor-pointer' onClick={openCartHandler}></BsBag>
                        <span className='text-xs -mt-2 -ml-2 rounded-full h-5 flex items-center justify-center w-5 bg-pink-500 text-center'>{cartSize}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;