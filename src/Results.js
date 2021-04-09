import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="Word">{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index} className="Phonetics">
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index} className="Meanings">
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
