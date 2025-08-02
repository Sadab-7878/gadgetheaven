import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Statistics from "./pages/Statistics/Statistics";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/productdetails" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
