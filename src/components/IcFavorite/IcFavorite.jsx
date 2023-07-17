import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IcFavorite = ({
  className,
  icFavorite = "https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/ic-favorite-24px@2x.png",
}) => {
  return <img className={`ic-favorite ${className}`} alt="Ic favorite" src={icFavorite} />;
};

IcFavorite.propTypes = {
  icFavorite: PropTypes.string,
};
