import React from "react";
import { Link } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import Header from "../components/Header";
// import Message from "../components/LoadingError/Error";

const OrderScreen = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row  order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row ">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-user" />
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Customer</strong>
                </h5>
                <p>doe</p>
                <p>
                  <Link to={"mailto:doe@gmail.com"}>doe@gmail.com</Link>
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-truck-moving" />
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Order info</strong>
                </h5>
                <p>Shipping: a</p>
                <p>Pay method: PayPal</p>
                <div className="bg-info p-2 col-12">
                  <p className="text-white text-center text-sm-start">
                    Paid on Jan 12 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-map-marker-alt" />
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Deliver to</strong>
                </h5>
                <p>Address: a, a, a</p>
                <div className="bg-danger p-1 col-12">
                  <p className="text-white text-center text-sm-start">
                    Not Delivered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row order-products justify-content-between">
          <div className="col-lg-8">
            {/* <Message variant="alert-info mt-5">Your order is empty</Message> */}
            <div className="order-product row">
              <div className="col-md-3 col-6">
                <img src={`/images/1.png`} alt="Best Nike shoe for men" />
              </div>
              <div className="col-md-5 col-6 d-flex align-items-center">
                <Link href="/products/6240a42a828981a31fce3a89">
                  <h6>Best Nike shoe for men</h6>
                </Link>
              </div>
              <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                <h4>QUANTITY</h4>
                <h6>1</h6>
              </div>
              <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                <h4>SUBTOTAL</h4>
                <h6>$234</h6>
              </div>
            </div>
          </div>
          {/* Total */}
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  <td>$534.00</td>
                </tr>
                <tr>
                  <td>
                    <strong>Shipping</strong>
                  </td>
                  <td>$0.00</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  <td>$80.10</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>$614.10</td>
                </tr>
              </tbody>
            </table>
            <div className="col-12">
              <PayPalButton amout={345} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderScreen;
