import React from "react";
import { Spring } from "react-spring";
const HeadlineSelect = ({ onTopicSelect }) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {styles => (
        <div
          style={styles}
          className="col-md-8 d-flex justify-content-center align-items-center"
        >
          <div id="mainselection">
            <select onChange={onTopicSelect} className="p-2">
              <option disabled>Select an Option</option>
              <option value="politics">Politics</option>
              <option value="business">Business</option>
              <option value="entertainment">Entertainment</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
            </select>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default HeadlineSelect;
