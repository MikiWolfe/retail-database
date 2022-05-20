import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function Loading () {
    return (
        <div>
         
              <p>Loading ... <Spinner animation="border" variant="success" /> </p>
        </div>
    )
}

