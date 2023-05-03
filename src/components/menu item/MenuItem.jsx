import React from "react";
import "./menu-item.scss";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/CustomButton";

const MenuItem = ({ title, imageUrl, subtitle, linkUrl, match, history }) => {
  return (
    <div className={`menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="menutitle">{title}</h1>
        <span className="subtitle">{subtitle}</span>
        <CustomButton onClick={() => history.push(`${match.url}${linkUrl}`)}>
          View Collection
        </CustomButton>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
