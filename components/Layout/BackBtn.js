import React from "react";
import { Spring } from "react-spring";

const backBtn = ({ onBackClick }) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {styles => (
        <div style={styles}>
          <a onClick={onBackClick} className="float-right p-2 backBtn">
            <i className="fas fa-arrow-left fa-2x text-light p-2" />{" "}
            <span className="lead text-light">Catagories</span>
          </a>
        </div>
      )}
    </Spring>
  );
};

export default backBtn;
