import React from "react";
import { Link } from "react-router-dom";
import "./Bar.css";
export default function NavBar() {
  return (
    <div className="nav">
      <Link to="/homepage" className="nav-a">
        Home
      </Link>
      <Link to="/create-product" className="nav-a">
        Add Product
      </Link>

      <Link to="/product" className="nav-a">
        Full Inventory
      </Link>

     
    </div>
  );
}
