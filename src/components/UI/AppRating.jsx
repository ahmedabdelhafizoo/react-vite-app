import React from "react";
import PropTypes from "prop-types";
import SVG from "react-inlinesvg";
import { getImageUrl } from "@/helpers";

const AppRating = ({ ratingValue, id }) => {
  return (
    <div className="rating-box">
      {Array.from(Array(5), (e, index) => {
        return (
          <React.Fragment key={Math.random() * (index + 10)}>
            <input
              type="radio"
              value={5 - index}
              checked={5 - index === ratingValue}
              id={`${id}-star-${5 - index}`}
              disabled
            />
            <label htmlFor={`${id}-star-${5 - index}`}>
              <SVG src={getImageUrl("icons/star.svg")} />
            </label>
          </React.Fragment>
        );
      })}
    </div>
  );
};

// validate props
AppRating.propTypes = {
  ratingValue: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default AppRating;
