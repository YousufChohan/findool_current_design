import React from "react";

import { Link } from "react-router-dom";

const ProductCard = () => (
  <div className="card-wrapper">
    <div className="card">
      <div className="card-content">
        <p className="card-title">Awesome Product | $45 - $48</p>
        <p className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
          culpa.
        </p>
        <Link to="/" className="card-button">
          Add to Cart
        </Link>
      </div>
    </div>
  </div>
);

export default ProductCard;
