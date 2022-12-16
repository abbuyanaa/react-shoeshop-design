import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { product } = props;
  return (
    <>
      <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
        <div className="card card-product-grid shadow-sm">
          <Link className="img-wrap" to="/products">
            <img src={product.image} alt={product.name} />
          </Link>
          <div className="info-wrap">
            <Link className="title text-truncate" to="/products">
              {product.name}
            </Link>
            <div className="price mb-2">${product.price}</div>
            <div className="row">
              <Link
                className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
                to={`/product/${product.id}/edit`}
              >
                <i className="fas fa-pen"></i>
              </Link>
              <Link
                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
                to="/products"
              >
                <i className="fas fa-trash-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
