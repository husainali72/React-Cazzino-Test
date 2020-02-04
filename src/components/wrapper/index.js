import React from "react";

const Wrapper = props => {
  return (
    <div className="main-wrapper">
      <div className="innner-wrapper">{props.children}</div>
    </div>
  );
};

export default Wrapper;
