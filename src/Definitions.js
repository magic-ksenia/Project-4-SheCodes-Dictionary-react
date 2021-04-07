import React from "react";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      <p>Definition: {props.definition.definition}</p>
      <em>Example: {props.definition.example}</em>
      <p>Synonyms: </p>
    </div>
  );
}
/* {props.definition.synonyms.map(function (synonym, index) {
        return <span key={index}> {synonym}, </span>;
      })}*/
