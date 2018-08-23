import React from "react";
import { Spring } from "react-spring";
const SubmitBtn = ({ query, onTopicSubmit }) => {
  return (
    <Spring delay={400} from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {styles => (
        <div className="col-md-8" style={styles}>
          <a
            onClick={() => onTopicSubmit(query)}
            className="btn btn-success btn-block btn-lg text-light submitBtn"
          >
            Get
          </a>
        </div>
      )}
    </Spring>
  );
};

export default SubmitBtn;
