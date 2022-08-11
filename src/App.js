import Header from "./components/Header";
import SliderFrame from "./components/sliders/SliderFrame";
import GlossContainer from "./components/products/GlossContainer";
import FooterContainer from "./components/footer/FooterContainer";
function App() {
  return (
    <div className="App relative flex flex-col">
      <Header></Header>
      <SliderFrame></SliderFrame>
      <GlossContainer></GlossContainer>
      <FooterContainer></FooterContainer>
    </div>
  );
}

export default App;
