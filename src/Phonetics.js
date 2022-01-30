import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        {props.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <a href={phonetic.audio} alt="" rel="noreferrer" target="_blank">
                audio
              </a>{" "}
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
