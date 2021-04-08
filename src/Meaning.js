import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong>DEFINITIONS</strong>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>{index + 1}. </strong>
            {definition.definition}
            <Examples examples={definition.example} />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
