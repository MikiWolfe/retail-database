// import "./FrontPage.css";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import NavBar from "./bars/NavBar";
import Header from "./Header";

function SearchBar(props) {
  const [name, searchName] = useState("");
  const [brand, searchBrand] = useState("");
  const [category, searchCategory] = useState("");
  const [price, searchPrice] = useState("");

const searchBtn = () =>{
  
}

  return (
    <div>
      <Header/> 
     <NavBar/>
      <div className="search">
        <h4> Search for an item: </h4>
        <input
          className="search"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => searchName(e.target.value)}
        />
        <input
          className="search"
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => searchBrand(e.target.value)}
        />
        <input
          className="search"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => searchCategory(e.target.value)}
        />
        <input
          className="search"
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => searchPrice(e.target.value)}
        />
        <button className="homepage-btn" type="submit" onClick={searchBtn}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}
export default SearchBar;
