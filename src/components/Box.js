import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Box = styled.div`
  padding: 12px;
  border: 2px solid #f2f2f2;
  border-radius: 2px;
  background: #6f6f6f;
  margin: 0 auto;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;

  // @media (min-width: 768px) {
  //   width: 600px;
  //   height: 400px;
  // }
`;

Box.propTypes = {};

export default Box;
