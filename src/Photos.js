import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <ul>
          {props.photos.map(function (photo, index) {
            return (
              <li key={index}>
                <a
                  href={photo.pageURL}
                  target="_blank"
                  rel="noreferrer"
                  title="Photos provided by Pixabay.com"
                >
                  <img
                    className="image-search"
                    src={photo.webformatURL}
                    alt={photo.tags}
                    loading="lazy"
                  />
                </a>
              </li>
            );
          })}
          <li></li>
        </ul>
        <img
          className="pixabay-logo"
          src="https://pixabay.com/static/img/logo.png"
          alt="Pixabay logo"
        />
      </section>
    );
  } else {
    return null;
  }
}
