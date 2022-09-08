import Header from "./components/Header";
import SliderFrame from "./components/sliders/SliderFrame";
import GlossContainer from "./components/products/GlossContainer";
import ValuesContainer from "./components/ValuesContainer";
import FooterContainer from "./components/footer/FooterContainer";
import CartContainer from './components/Cart/CartContainer';
import CartProvider from "./store/CartProvider";
import cartContext from "./store/cart-context";
import { useState } from "react";
import './App.css';

function App() {
  // const cartCtx = useContext(cartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCartHandler = (isOpen) =>{
    setIsCartOpen(isOpen);
  }
  return (
    <CartProvider>
      <div className="App relative flex flex-col overflow-hidden bg-slate-100  h-screen">
        <Header onShowCart={openCartHandler}></Header>
        <div className="overflow-auto min-h-full">
          <SliderFrame></SliderFrame>
          <GlossContainer></GlossContainer>
          <ValuesContainer></ValuesContainer>
          <FooterContainer></FooterContainer>
          {isCartOpen && <CartContainer onCloseCart={openCartHandler}></CartContainer>}
        </div>

      </div>
    </CartProvider>

  );
}

export default App;
