import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span className="Transcription"> {props.phonetic.text} </span>
      <ReactAudioPlayer src={props.phonetic.audio} controls volume={0.6} />
    </div>
  );
}
