import React from "react";
import "./banner.scss";
import { withRouter } from "react-router-dom";
const Banner = ({ title, link, history, match, icon }) => {
  return (
    <div className="banner">
      <div className="info_con">
        <span className="banner_title">{title}</span>
        <span
          onClick={() => history.push(`${match.url}${link}`)}
          className="banner-link"
        >
          view collection→
        </span>
      </div>
      <div className="banner_image_con">{icon}</div>
    </div>
  );
};

export default withRouter(Banner);
