import React from "react";
import { Spring } from "react-spring";
const CatagoriesBtns = ({ onChooseNewsClick, onHeadlinesClick }) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {styles => (
        <div style={styles} className="col-md-8">
          <h2 className="text-center text-success">Catagories</h2>
          <a
            onClick={onHeadlinesClick}
            style={{ color: "#fff", padding: "30px" }}
            className="btn btn-outline-success btn-lg float-left catagoriesLeft"
          >
            Top Headlines in the US
          </a>
          <a
            onClick={onChooseNewsClick}
            style={{ color: "#fff", padding: "30px" }}
            className="btn btn-outline-success btn-lg float-right catagoriesRight"
          >
            Choose Your News..
          </a>
        </div>
      )}
    </Spring>
  );
};

export default CatagoriesBtns;
