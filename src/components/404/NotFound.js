import React from "react";
import StyledError from "./styles";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <StyledError>
      <h1 className="wilsonNumber">
        4
        <img
          src="https://res.cloudinary.com/juancereceda/image/upload/v1626531685/castaway_volleyball-320_grk8qb.png"
          className="wilsonImg"
        />
        4
      </h1>
      <h1>Looks like you are lost! We still can rescue you:</h1>
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </StyledError>
  );
}

export default NotFound;
