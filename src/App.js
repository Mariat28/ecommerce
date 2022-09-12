import Header from "./components/Header";
import SliderFrame from "./components/sliders/SliderFrame";
import GlossContainer from "./components/products/GlossContainer";
import ValuesContainer from "./components/ValuesContainer";
import FooterContainer from "./components/footer/FooterContainer";
import CartContainer from './components/Cart/CartContainer';
import CartProvider from "./store/CartProvider";
import { useState, useRef } from "react";
import './App.css';

function App() {
  // const cartCtx = useContext(cartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [search_term, setSearchTerm] = useState('');
  const shopRef = useRef();
  const sellersRef = useRef();
  const valuesRef = useRef();

  const searchHandler = (search_value) => {
    setSearchTerm(search_value);
  }
  const scrollViewHandler = (scrollElement) =>{
    console.log('scroll to element', scrollElement, shopRef);
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
  return (
    <CartProvider>
      <div className="App relative flex flex-col overflow-hidden bg-pink-100  h-screen">
        <Header onShowCart={openCartHandler} onSearchInput = {searchHandler} onScrollToClick={scrollViewHandler}></Header>
        <div className="overflow-auto min-h-full">
          <SliderFrame></SliderFrame>
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
