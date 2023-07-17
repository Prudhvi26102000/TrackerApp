import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BrowserBarAndroid = ({ style, appearance, punchHall, className }) => {
  return (
    <div className={`browser-bar-android ${style} ${appearance} ${className}`}>
      {style === "full" && appearance === "light" && (
        <div className="overlap-group">
          <div className="home">
            <img
              className="union"
              alt="Union"
              src="https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/union-7@2x.png"
            />
          </div>
          <div className="address-field">
            <div className="frame">
              <img
                className="vector"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/vector-11@2x.png"
              />
              <div className="example-com">example.com</div>
            </div>
          </div>
          <img
            className="img"
            alt="More"
            src="https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/more-1@2x.png"
          />
          <div className="android-status-bar">
            <div className={`time ${punchHall}`}>
              <div className="element">10:00</div>
            </div>
            <img
              className="signal-wifi"
              alt="Signal wifi"
              src="https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/signal-wifi-8@2x.png"
            />
            <img
              className="signal-cellular"
              alt="Signal cellular"
              src="https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/signal-cellular-8@2x.png"
            />
            <img
              className="battery-full"
              alt="Battery full"
              src="https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/battery-full-8@2x.png"
            />
          </div>
        </div>
      )}

      {style === "full" && appearance === "dark" && (
        <>
          <div className="home">
            <img
              className="union"
              alt="Union"
              src="https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/union-3@2x.png"
            />
          </div>
          <div className="frame-wrapper">
            <div className="frame">
              <img
                className="vector"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/vector-7@2x.png"
              />
              <div className="text-wrapper">example.com</div>
            </div>
          </div>
        </>
      )}

      {style === "full" && (
        <div className="chrome-tabs">
          <img
            className="union-2"
            alt="Union"
            src={
              appearance === "dark"
                ? "https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/union-2@2x.png"
                : "https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/union-6@2x.png"
            }
          />
        </div>
      )}

      {style === "full" && appearance === "dark" && (
        <>
          <img
            className="img"
            alt="Sharp navigation"
            src="https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/sharp-navigation-more-vert-1@2x.png"
          />
          <div className="android-status-bar">
            <div className={`element-wrapper punch-hall-${punchHall}`}>
              <div className="div">10:00</div>
            </div>
            <img
              className="signal-wifi"
              alt="Signal wifi"
              src="https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/signal-wifi-6@2x.png"
            />
            <img
              className="signal-cellular"
              alt="Signal cellular"
              src="https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/signal-cellular-6@2x.png"
            />
            <img
              className="battery-full"
              alt="Battery full"
              src="https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/battery-full-6@2x.png"
            />
          </div>
        </>
      )}

      {style === "scroll" && (
        <div className="android-status-bar-wrapper">
          <div className="android-status-bar-2">
            <div className={`div-wrapper punch-hall-0-${punchHall}`}>
              <div className="element-2">10:00</div>
            </div>
            <img
              className="signal-wifi"
              alt="Signal wifi"
              src={
                appearance === "dark"
                  ? "https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/signal-wifi-6@2x.png"
                  : "https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/signal-wifi-8@2x.png"
              }
            />
            <img
              className="signal-cellular"
              alt="Signal cellular"
              src={
                appearance === "dark"
                  ? "https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/signal-cellular-6@2x.png"
                  : "https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/signal-cellular-8@2x.png"
              }
            />
            <img
              className="battery-full"
              alt="Battery full"
              src={
                appearance === "dark"
                  ? "https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/battery-full-6@2x.png"
                  : "https://generation-sessions.s3.amazonaws.com/cce779fa8a014fa26748b78b77b78d9c/img/battery-full-8@2x.png"
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

BrowserBarAndroid.propTypes = {
  style: PropTypes.oneOf(["full", "scroll"]),
  appearance: PropTypes.oneOf(["dark", "light"]),
  punchHall: PropTypes.oneOf(["off", "on"]),
};
