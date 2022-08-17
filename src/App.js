import Header from "./components/Header";
import SliderFrame from "./components/sliders/SliderFrame";
import GlossContainer from "./components/products/GlossContainer";
import ValuesContainer from "./components/ValuesContainer";
import FooterContainer from "./components/footer/FooterContainer";
import './App.css';
function App() {
  return (
    <div className="App relative flex flex-col overflow-hidden  h-screen">
      <Header></Header>
      <div className="overflow-auto min-h-full">
        <SliderFrame></SliderFrame>
        <GlossContainer></GlossContainer>
        <ValuesContainer></ValuesContainer>
        <FooterContainer></FooterContainer>
      </div>

    </div>
  );
}

export default App;
