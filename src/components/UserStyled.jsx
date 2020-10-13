import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = ({ text, ...style }) => <span style={style}>{text}</span>;
const Image = ({ img, ...style }) => <img style={style} alt="avatar" src={img} />;

const StyledText = styled(Text)`
  color: ${(props) => props.color || "lightgrey"};
`;
const ImageBorder = styled(Image)`
  border-color: ${(props) => props.color || "white"};
`;

const UserStyled = ({ id, name, avatar, speed, time, color }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div id={id} className="user" onClick={handleClick}>
      <div className="user__logo">
        {active ? <StyledText color={color.blueviolet} text={id} /> : <span>{id} </span>}
        {active ? <ImageBorder img={avatar} border-color={color.blueviolet} /> : <img src={avatar} alt="avatar" />}
      </div>
      <div className="user__info">
        <div className="user__info_name">
          <span>{name}</span>
        </div>
        <div className="user__info_speed">
          {active ? <StyledText color={color.blueviolet} text="00:00.000" /> : <span>00:00.000</span>}
          <span className="speed">| {speed}км/ч</span>
        </div>
        <div className="user__info_penalty">
          {active ? (
            <StyledText color={color.orange} text={`штрафное время ${time}0:00.000`} />
          ) : (
            <span>штрафное время {time}0:00.000</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserStyled;

UserStyled.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  color: PropTypes.object.isRequired,
  speed: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
};
