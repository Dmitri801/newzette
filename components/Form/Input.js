import React from "react";
import { Spring } from "react-spring";

const Input = ({ onChange, query, onTopicSubmit }) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {styles => (
        <div style={styles} className="col-md-8 input-effect">
          <input
            style={{
              border: "none",
              background: "transparent",
              width: "100%",
              fontSize: "30px",
              fontWeight: "bold"
            }}
            className="effect-18"
            type="text"
            onChange={onChange}
            onKeyPress={e => {
              if (e.key === "Enter") {
                onTopicSubmit(query);
                e.target.blur();
              }
            }}
            value={query}
          />
          <label style={{ fontSize: "30px" }} className="text-center">
            Choose Your News..
          </label>
          <span className="focus-border" />
        </div>
      )}
    </Spring>
  );
};

export default Input;
