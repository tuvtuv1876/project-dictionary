import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics);
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        {props.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <a href={phonetic.audio} rel="noreferrer" target="_blank">
                audio
              </a>
              [{phonetic.text}]
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
