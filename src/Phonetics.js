import React from "react";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        {props.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              [{phonetic.text}]{" "}
              <a href={phonetic.audio} alt="" rel="noreferrer" target="_blank">
                audio
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
