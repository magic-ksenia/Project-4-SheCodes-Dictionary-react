import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <div className="row">
          <div className="col-auto">Synonyms:</div>
          {props.synonyms.map(function (synonym, index) {
            return (
              <div className="col-auto synonym" key={index}>
                {" "}
                {synonym}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
