import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
import { Toaster } from "react-hot-toast";
function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div id="home">
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Toaster />

      <Footer />
    </div>
  );
}

export default App;
