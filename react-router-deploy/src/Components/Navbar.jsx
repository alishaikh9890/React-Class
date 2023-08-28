import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: blueviolet;
  color: white;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 1.5vh 2vh;

  &:hover {
    background-color: skyblue;
    color: black;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper className="Navbar">
      <StyledLink to="">HOME</StyledLink>
      <StyledLink to="/about">ABOUT</StyledLink>
      <StyledLink to="/contact">CONTACT</StyledLink>
      <StyledLink to="/login">LOGIN</StyledLink>
      <StyledLink to="/users">USERS</StyledLink>
      <StyledLink to="/products">PRODUCTS</StyledLink>
    </NavbarWrapper>
  );
};

export default Navbar;
