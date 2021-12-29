import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import SingleProduct from "./pages/singleProduct/SingleProduct";
const App = () => {
  return (
    <div className="App">
      <Router>
        
        <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        </Layout>
       
      </Router>
    </div>
  );
};

export default App;
