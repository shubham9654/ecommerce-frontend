import "./app.css";
import { Routes, Route } from 'react-router-dom';
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
};

export default App;
