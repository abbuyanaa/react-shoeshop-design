import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const CartScreen = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      {/* Cart */}
      <div className="container">
        {/* <div className="alert alert-info text-center mt-3">
          Your cart is empty
          <Link
            className="btn btn-success mx-5 px-5 py-3"
            to="/"
            style={{ fontSize: "12px" }}
          >
            SHOPPING NOW
          </Link>
        </div> */}
        <div className="alert alert-info text-center mt-3">
          Total Cart Products
          <Link className="text-success mx-2" to="/cart">
            (4)
          </Link>
        </div>
        {/* CARTITERM */}
        <div className="cart-iterm row">
          <div className="remove-button d-flex justify-content-center align-items-center">
            <i className="fas fa-times" />
          </div>
          <div className="cart-image col-md-3">
            <img src={`/images/1.png`} alt="New 2022 from zpunet" />
          </div>
          <div className="cart-text col-md-5 d-flex align-items-center">
            <Link to="/">
              <h4>New 2022 from zpunet</h4>
            </Link>
          </div>
          <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
            <h6>QUANTITY</h6>
            <select>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
            <h6>SUBTOTAL</h6>
            <h4>$300</h4>
          </div>
        </div>

        {/* End of cart iterms */}
        <div className="total">
          <span className="sub">total:</span>
          <span className="total-price">$534.00</span>
        </div>
        <hr />
        <div className="cart-buttons d-flex align-items-center row">
          <Link className="col-md-6" to="/">
            <button>Continue To Shopping</button>
          </Link>
          <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
            <button>
              <Link to="/shipping" className="text-white">
                Checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
