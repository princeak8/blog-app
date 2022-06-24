import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 70px;
  width: 100%;
  align-items: center;
  border-bottom: 1px whitesmoke solid;
`;

const HeaderLinks = styled.div`
  display: flex;
  flex: 3;
  justify-content: space-around;
  margin-left: 30px;
`;

const HeaderSearchBar = styled.div`
  flex: 1;
  justify-content: space-between;
  margin-right: 10px;
`;

function Header(props) {
  return (
    <HeaderContainer>
      <HeaderLinks>
        <NavLink to="#">Home</NavLink>
        <NavLink to="#">About</NavLink>
      </HeaderLinks>
      <HeaderSearchBar>
        <Search />
      </HeaderSearchBar>
    </HeaderContainer>
  );
}

export default Header;
