import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'


export default function FrontPage() {

  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to the Online Internet Database </h1>

        <Link to="/homepage">
        <Button size = "lg" variant="info"> Click here, if you dare</Button>
        </Link>

      </header>
    </div>
  );
}
