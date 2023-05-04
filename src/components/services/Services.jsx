import React from "react";
import "./services.scss";
import {
  FaDollarSign,
  FaShippingFast,
  FaCreditCard,
  FaHeadphonesAlt,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="services">
      <div className="service_con">
        <div className="service_icon_con">
          <FaShippingFast className="service_icon" />
        </div>
        <div className="service_details">
          <span className="service_title">Free Shipping</span>
          <span className="service_subtitle">
            Free Shipping for orders over £130
          </span>
        </div>
      </div>
      <div className="service_con">
        <div className="service_icon_con">
          <FaDollarSign className="service_icon" />
        </div>
        <div className="service_details">
          <span className="service_title">Money Guarantee</span>
          <span className="service_subtitle">
            Within 40 days for an exchange.
          </span>
        </div>
      </div>
      <div className="service_con">
        <div className="service_icon_con">
          <FaCreditCard className="service_icon" />
        </div>
        <div className="service_details">
          <span className="service_title">Flexible Payment</span>
          <span className="service_subtitle">
            Pay with Multiple Credit Cards
          </span>
        </div>
      </div>
      <div className="service_con">
        <div className="service_icon_con">
          <FaHeadphonesAlt className="service_icon" />
        </div>
        <div className="service_details">
          <span className="service_title">Online Support</span>
          <span className="service_subtitle">
            24 hours a day, 7 days a week
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
