import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img src={`/images/mastercard.png`} alt="mastercard" />
        </div>
        <div className="card-name">
          <img src={`/images/visa.png`} alt="visa" />
        </div>
        <div className="card-name">
          <img src={`/images/Paypal.png`} alt="paypal" />
        </div>
        <div className="card-name">
          <img src={`/images/american-express.png`} alt="mastercard" />
        </div>
        <div className="card-name">
          <img src={`/images/discover.png`} alt="discover" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
