import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import AddProductScreen from "./screens/AddProductScreen";
import LoginScreen from "./screens/LoginScreen";
import UsersScreen from "./screens/UsersScreen";
import EditProductScreen from "./screens/EditProductScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/products" element={<ProductScreen />} />
        <Route path="/category" element={<CategoriesScreen />} />
        <Route path="/orders" element={<OrderScreen />} />
        <Route path="/order" element={<OrderDetailScreen />} />
        <Route path="/addproduct" element={<AddProductScreen />} />
        <Route path="/users" element={<UsersScreen />} />
        <Route path="/product/:id/edit" element={<EditProductScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </>
  );
}

export default App;
