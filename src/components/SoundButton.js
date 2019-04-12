import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SoundButton = styled.button`
  background: ${props => (props.isActive ? "pink" : "#f2f2f2")};
  &:active {
    background: pink;
    padding-left: 2px;
  }
  width: 95px;
  font-size: 0.9rem;
  text-align: center;
  height: 95px;
  margin-bottom: 5px;
  box-shadow: 1px 1px 4px #1f1f1f;
  border: 1px solid #000;
  border-radius: 2px;
`;

SoundButton.propTypes = {};

export default SoundButton;
