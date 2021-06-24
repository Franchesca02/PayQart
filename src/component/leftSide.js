import React from "react";
import { NavLink } from "react-router-dom";
import Phone from "../files/phone.png";
import Logo from "../files/Logo.jpg";

import Shirt from "../files/shirt.jpg";

function Left() {
  return (
    <div className="left">
      <div className="side-logo height">
          <div className="overlay"></div>
        <NavLink to="/" className="back"><i class="fas fa-long-arrow-alt-left"></i>Back to store</NavLink>
      <div className="payqart-icon"><img src={Logo} alt="Payqart logo" /></div>
     
      <div className="lists">
<ul>
  <li>Get pre-approved instantly.</li>
  <li>Spread payment for up to six months.</li>
  <li>Provide some basic information to get started.</li>
</ul>
</div>

      </div>

      <div className="order-summary height">
          <h6 className="order">Order Summary</h6>
          <div className="item-cards">
            <div className="item">
                <div className="item-icon">
                    <img src={Phone} alt="Card Icon"/>                </div>
            <div className="item-details">
                <p>Meeyso P45 Pro</p>
                <p>#42,900</p>
                <p>Qty: 1</p>
            </div>
            </div>
            <div className="item">
                <div className="item-icon">
                    <img src={Shirt} alt="Card Icon"/>                </div>
            <div className="item-details">
                <p>Men's long sleeve shirt</p>
                <p>#6,800</p>
                <p>Qty: 2</p>
            </div>
            </div>
          </div>
          <div className="item-cards total">
            <h6>Total cart Value:</h6>
            <h6>#52,100</h6>
          </div>
      </div>
    </div>
  );
}

export default Left;
