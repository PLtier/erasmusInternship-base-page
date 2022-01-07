import React from "react";
import PropTypes from "prop-types";
//import { GatsbyImage } from "gatsby-plugin-image";
import Gallery from "./Gallery";

export default function FullWidthImage(props) {
  const { title, subheading, images } = props;

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
        <div
          style={{
            gridArea: "1/1",
          }}
        >
          <Gallery images={images} />
        </div>

        {(title || subheading) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
            }}
          >
            {/* Any content here will be centered in the component */}
            {title && (
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  backgroundColor: "rgb(251, 136, 39, 0.75)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25em",
                }}
              >
                {title}
              </h1>
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  backgroundColor: "rgb(251, 136, 39, 0.5)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                }}
              >
                {subheading}
              </h3>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  title: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.object),
  height: PropTypes.number,
  subheading: PropTypes.string,
};
