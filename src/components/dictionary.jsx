import React from "react";
// import Dict from ".//idontknow";
// import emojipedia from "../emojipedia";

const Rend = function (props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
};

export default Rend;
