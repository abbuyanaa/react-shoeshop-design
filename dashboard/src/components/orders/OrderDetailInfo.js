import React from "react";
import { Link } from "react-router-dom";

const OrderDetailInfo = () => {
  return (
    <div className="row mb-5 order-info-wrap">
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-user" />
          </span>
          <div className="text">
            <h6 className="mb-1">Customer</h6>
            <p className="mb-1">
              User Adamu <br />
              <Link to="mailto:user@example.com">user@example.com</Link>
            </p>
          </div>
        </article>
      </div>
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-truck-moving" />
          </span>
          <div className="text">
            <h6 className="mb-1">Order info</h6>
            <p className="mb-1">
              Shipping: Tanzania <br /> Pay method: PayPal
            </p>
          </div>
        </article>
      </div>
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-map-marker-alt" />
          </span>
          <div className="text">
            <h6 className="mb-1">Deliver to</h6>
            <p className="mb-1">
              Address: Arusha
              <br />
              Ngaramtoni Crater
              <br /> P.O Box Arusha Tz 1234
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default OrderDetailInfo;
