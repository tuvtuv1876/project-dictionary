import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  title={photo.alt}
                  src={photo.photographer}
                >
                  <img
                    className="img-fluid"
                    src={photo.src.landscape}
                    title={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
        <div className="pexelsLink">
          Photos provided by <a href="https://www.pexels.com">Pexels</a>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
