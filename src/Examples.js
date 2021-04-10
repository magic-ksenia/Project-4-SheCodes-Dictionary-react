import React from "react";

export default function Examples(props) {
  if (props.examples) {
    return (
      <div className="Examples">
        <em>"{props.examples}"</em>
      </div>
    );
  } else {
    return null;
  }
}
