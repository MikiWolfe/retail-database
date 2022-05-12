import { Link } from "react-router-dom";
import "./FrontPage.css";

export default function FrontPage() {

  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to the Online Internet Database </h1>

        <Link to="/homepage">
          <button>ENTER IF YOU DARE</button>
        </Link>
      </header>
    </div>
  );
}
