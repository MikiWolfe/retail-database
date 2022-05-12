import {Link, useLocation } from "react-router-dom";
import "./FrontPage.css";


export default function FrontPage() {
  const location = useLocation
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to the Online Internet Database </h1>

    <Link to ='/homepage' className={location.pathname ==="/homepage"}>    <button> 
           ENTER IF YOU DARE 
           </button></Link>
      </header>
    </div>
  );
}
