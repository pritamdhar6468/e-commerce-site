import "./App.css";
import Header from "./component/header/Header";
import Hero from "./component/Hero/Hero";
import Slider from "./component/Slider/Slider"
import Virtual from "./component/Virtual/Virtual";
import Products from "./component/Products/Products";
import Testimonials from "./component/Testimonials/Testimonials";
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonials/>
    </div>
  );
}

export default App;
