import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const StyledBorderlessButton = styled.button`
  font-weight: 400;
  color: #419eda;
  align-self: flex-start;
  font-family: inherit; 
  font-size: 100%; 
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const BorderlessButton = ({children, onClick}) => {
  return (
    <StyledBorderlessButton onClick={onClick}>{children}</StyledBorderlessButton>
  );
}

BorderlessButton.propTypes = {
  onClick: PropTypes.func
}

export default BorderlessButton;