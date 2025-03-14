import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ title, path }) => {
  return (
    <>
      <div className="card">
        <Link to={path} className="iframe_wrapper">
          <iframe src={path} title={title}></iframe>
        </Link>

        <h3 className="iframe_title">
          <Link to={path}>{title}</Link>
        </h3>
      </div>
    </>
  );
};

export default HomeCard;
