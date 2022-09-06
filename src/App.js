import Header from "./components/Header";
import SliderFrame from "./components/sliders/SliderFrame";
import GlossContainer from "./components/products/GlossContainer";
import ValuesContainer from "./components/ValuesContainer";
import FooterContainer from "./components/footer/FooterContainer";
import CartContext from "./store/cart-context";
import {useState} from "react"
import './App.css';
function App() {
  const [cartItems, setCartItems] = useState([]);
  const updateCartHandler = (items) =>{
    console.log('parent cart', items)
      setCartItems(items);
  }
  return (
    <CartContext.Provider value={{cart : cartItems}}>
      <div className="App relative flex flex-col overflow-hidden bg-slate-100  h-screen">
        <Header></Header>
        <div className="overflow-auto min-h-full">
          <SliderFrame></SliderFrame>
          <GlossContainer onUpdateCart={updateCartHandler}></GlossContainer>
          <ValuesContainer></ValuesContainer>
          <FooterContainer></FooterContainer>
        </div>

      </div>
    </CartContext.Provider>

  );
}

export default App;
