import React from "react";
import HighlightCard from "./HighlightCard";
import PropTypes from "prop-types";

export default function ContentRowMovies({stats}) {
  return (
    <div className="row">
      {stats.map((data, i) => {
        return (
          <HighlightCard
            key={i}
            {...data}
          />
        ) }
      ) }
    </div>
  );
}

ContentRowMovies.propTypes = {
  stats: PropTypes.array.isRequired
};