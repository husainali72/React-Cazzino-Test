import React from "react";

const Column = (props) => {
  return (
    <div className={"column column-" + props.size}>
      {props.children}
    </div>
  );
}

export default Column;
