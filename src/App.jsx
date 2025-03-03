import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Shop from "./pages/shop";
import { CartProvider } from "./context/CartContext";

function App() {
  return(
    <CartProvider>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
    </Router>
    </CartProvider>
    
  )
}

export default App