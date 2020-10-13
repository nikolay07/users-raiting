import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const User = ({ id, name, avatar, speed, time, color }) => {
  const [active, setActive] = useState(false);

  const numClass = classNames("num", {
    toggleViolet: active,
  });
  const avatarClass = classNames("avatar", {
    toggleBorder: active,
  });
  const timeClass = classNames("time", {
    toggleViolet: active,
  });
  const penaltyClass = classNames("penalty", {
    toggleOrange: active,
  });

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div id={id} className="user" onClick={handleClick}>
      <div className="user__logo">
        <span className={numClass}>{id}</span>
        <img src={avatar} alt="avatar" className={avatarClass} />
      </div>
      <div className="user__info">
        <div className="user__info_name">
          <span>{name}</span>
        </div>
        <div className="user__info_speed">
          <span className={timeClass}>00:00.000</span>
          <span className="speed">| {speed}км/ч</span>
        </div>
        <div className="user__info_penalty">
          <span className={penaltyClass}>штрафное время {time}0:00.000</span>
        </div>
      </div>
    </div>
  );
};

export default User;

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  color: PropTypes.object.isRequired,
  speed: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
};

