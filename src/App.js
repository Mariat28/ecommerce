import Header from "./components/Header";
import SliderFrame from "./components/sliders/SliderFrame";
import GlossContainer from "./components/products/GlossContainer";
import ValuesContainer from "./components/ValuesContainer";
import FooterContainer from "./components/footer/FooterContainer";
import CartContainer from './components/cart/CartContainer';
import ContactFormContainer from "./components/contact/ContactFormContainer";
import CartProvider from "./store/CartProvider";
import { useState, useRef } from "react";
import './App.css';

function App() {
  // const cartCtx = useContext(cartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [search_term, setSearchTerm] = useState('');
  const homeRef = useRef();
  const shopRef = useRef();
  const sellersRef = useRef();
  const valuesRef = useRef();

  const searchHandler = (search_value) => {
    setSearchTerm(search_value);
    shopRef.current?.scrollIntoView({behavior: 'smooth'});
  }
  const scrollViewHandler = (scrollElement) =>{
    if(scrollElement === 'home'){
      homeRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    if(scrollElement === 'shop'){
      shopRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    if(scrollElement === 'best sellers'){
      sellersRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    if(scrollElement === 'values'){
      valuesRef.current?.scrollIntoView(true, {behavior: 'smooth'});
    }
  }
  const openCartHandler = (isOpen) =>{
    setIsCartOpen(isOpen);
  }
  const ContactFormHandler = (isOpen) => {
    setIsContactOpen(isOpen);
  }
  return (
    <CartProvider>
      <div className="App relative flex flex-col overflow-hidden bg-pink-100  h-screen">
        <Header onShowCart={openCartHandler} onOpenContactForm={ContactFormHandler} onSearchInput = {searchHandler} onScrollToClick={scrollViewHandler}></Header>
        <div className="overflow-auto min-h-full">
          {isContactOpen && <ContactFormContainer onCloseform={ContactFormHandler}></ContactFormContainer>}
          <SliderFrame onScrollToClick={scrollViewHandler} ref={homeRef}></SliderFrame>
          <GlossContainer search_term={search_term} ref={shopRef}></GlossContainer>
          <ValuesContainer ref={valuesRef}></ValuesContainer>
          <FooterContainer></FooterContainer>
          {isCartOpen && <CartContainer onCloseCart={openCartHandler} onScrollToClick={scrollViewHandler}></CartContainer>}
        </div>

      </div>
    </CartProvider>

  );
}

export default App;
