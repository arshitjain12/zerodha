// import './App.css'

import AboutPage from "./landing_page/about/AboutPage";
import HomePage from "./landing_page/home/HomePage";
import Singup from "./landing_page/singup/Singup";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import Supportpage from "./landing_page/support/SupportPage";
function App() {
  return (
    <div>
      <HomePage />
      <Singup />
      <AboutPage />
      <ProductPage />
      <PricingPage />
      <Supportpage />
    </div>
  );
}

export default App;
