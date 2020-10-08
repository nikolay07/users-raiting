import React from "react";
import PropTypes from "prop-types";

const User = ({ id,  name, avatar, speed, time, color }) => {

  const handleClick = (e) => {
    let id = e.currentTarget.id
    const numOrder = document.getElementById(`num-order-${id}`); 
    const avatarBorder = document.getElementById(`avatar-border-${id}`);
    const time = document.getElementById(`time-${id}`);
    const penalty = document.getElementById(`time-penalty-${id}`);
    // numOrder.style.color = color.blueviolet;
    // avatarBorder.style.borderColor = color.blueviolet;
    // time.style.color = color.blueviolet;
    // penalty.style.color = color.orange;
    numOrder.classList.toggle("toggleViolet");
    avatarBorder.classList.toggle("toggleBorder");
    time.classList.toggle("toggleViolet");
    penalty.classList.toggle("toggleOrange"); 
    
  };
  
  return (
    <div id={id} className="user" onClick={handleClick}>
      <div className="user__logo">
        <span id={`num-order-${id}`} >
          {id}
        </span>
        <img
          src={avatar}
          alt="avatar"
          id={`avatar-border-${id}`}
          
        />
      </div>
      <div className="user__info">
        <div className="user__info_name">
          <span>{name}</span>
        </div>
        <div className="user__info_speed">
          <span id={`time-${id}`}>00:00.000</span>
          <span className="speed">| {speed}км/ч</span>
        </div>
        <div className="user__info_penalty">
          <span id={`time-penalty-${id}`} >
            штрафное время {time}0:00.000
          </span>
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
