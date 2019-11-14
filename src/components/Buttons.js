import React from "react";
import styled from "styled-components";
import { Link, navigate } from "gatsby";

const StyledPrimaryButton = styled.button`
  display: inline-block;
  border-radius: 10px;
  background: #ffcc00;
  color: black;
  padding: 28px 80px;
  font-size: 24px;
  line-height: 33px;
  font-weight: 700;
  display: inline-block;
  width: 100%;
  cursor: pointer;
  @media screen and (min-width: 767px) {
    width: auto;
  }
`;

const StyledSecondaryButton = styled.button`
  border-radius: 10px;
  border: 4px solid purple;
`;

export const SecondaryButton = ({ to, children }) => {
  return (
<<<<<<< HEAD
    <Link to={to}>
      <StyledSecondaryButton>{children}</StyledSecondaryButton>
    </Link>
=======
    <StyledSecondaryButton onClick={() => navigate(to)}>
      {children}
    </StyledSecondaryButton>
>>>>>>> 2318a2881cd8fbbc4b41cdba2d7ef3b807691668
  );
};

export const PrimaryButton = ({ to, children }) => {
  return (
<<<<<<< HEAD
    <Link to={to}>
      <StyledPrimaryButton>{children}</StyledPrimaryButton>
    </Link>
=======
    <StyledPrimaryButton onClick={() => navigate(to)} type="button">
      {children}
    </StyledPrimaryButton>
>>>>>>> 2318a2881cd8fbbc4b41cdba2d7ef3b807691668
  );
};

export default PrimaryButton;
