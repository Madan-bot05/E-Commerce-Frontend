import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdatePoduct from './pages/admin/page/UpdatePoduct';
import AllProducts from './pages/allproducts/AllProducts';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/registration" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/productInfo/:id" element={<ProductInfo/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/updateproduct" element={<UpdatePoduct/>}/>
        <Route path="/allproducts" element={<AllProducts/>}/>
        <Route path="/*" element={<NoPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
