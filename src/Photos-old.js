/*import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            if (photo.webformatWidth === 640 && photo.webformatHeight < 468) {
              return (
                <div className="col-4" key={index}>
                  <a
                    href={photo.pageURL}
                    target="_blank"
                    rel="noreferrer"
                    title="Photos provided by Pixabay.com"
                  >
                    <img
                      src={photo.webformatURL}
                      alt={photo.tags}
                      className="img-fluid"
                    />
                  </a>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <img
          className="pixabay-logo"
          src="https://pixabay.com/static/img/logo.png"
          alt="Pixabay logo"
          width="100px"
        />
      </section>
    );
  } else {
    return null;
  }
}

*/
