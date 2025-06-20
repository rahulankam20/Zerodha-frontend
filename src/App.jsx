import HomePage from "./landing_page/home/HomePage";
import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Signup from "./landing_page/signup/Signup";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import AboutPage from "./landing_page/about/AboutPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";
import Signin from "./landing_page/signin/Signin"

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/product" element={<ProductsPage />}/>
      <Route path="/pricing" element={<PricingPage />}/>
      <Route path="/support" element={<SupportPage />}/>
      <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
