import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function Loading () {
    return (
        <div>
         
              <p>Loading ...</p> <Spinner animation="border" variant="success" /> 
        </div>
    )
}

