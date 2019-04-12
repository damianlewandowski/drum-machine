import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PowerButton = styled.button`
  background: ${props => (props.on ? "green" : "crimson")}
  width: 50px;
  height: 25px;
  margin: 40px auto 0;
`;

PowerButton.propTypes = {};

export default PowerButton;
