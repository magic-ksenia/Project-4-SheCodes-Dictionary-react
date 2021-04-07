import React from "react";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      <p>
        Definition: {props.definition.definition}
        <br />
        <em>Example: {props.definition.example}</em>
        <br />
        Synonyms:{" "}
        {props.definition.synonyms.map(function (synonym, index) {
          if (index < 6) {
            return <span key={index}>{synonym}, </span>;
          } else {
            return null;
          }
        })}
      </p>
    </div>
  );
}
