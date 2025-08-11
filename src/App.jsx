import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Statistics from "./pages/Statistics/Statistics";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
