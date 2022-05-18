import React from "react";
import Header from "../component/Header";
import NavBar from "../component/bars/NavBar";

export default function Homepage() {
  return (
    <div>
      <Header />
      <NavBar />
      <img className="img" src={process.env.PUBLIC_URL + "/Wearhouse.jpg"} />
    </div>
  );
}
