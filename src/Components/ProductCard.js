import React from "react";

import { Link } from "react-router-dom";

const ProductCard = () => (
  <div className="card-wrapper">
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">Awesome Product</h2>
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
