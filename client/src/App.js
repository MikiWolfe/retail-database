import { Routes, Route,  } from "react-router-dom";

import React from "react";
import './App.css'
import FrontPage from "./pages/FrontPage";
import HomePage from "./pages/HomePage";
import Footer from "./component/bars/Footer";
import AddProduct from "./component/AddProduct";
import EditProduct from "./component/EditProduct";
import ProductList from "./component/ProductList";
import SearchBar from "./component/SearchBar";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/create-product" element={<AddProduct />} />
        <Route path="/update-product/:id" element={ <EditProduct />}/>
        <Route path="/search-product" element={<SearchBar />} />
        <Route
          path="*"
          element={<h2 className="page-header">Wrong page!</h2>}
        />
      </Routes>
      <Footer />
    </>
  );
}
