import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      <strong>DEFINITION</strong>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>{index + 1}. </strong>
            <span className="Definition">{definition.definition}</span>
            <Examples examples={definition.example} />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
