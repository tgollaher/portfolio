import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';



const ProfileImage = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 35%;
`;

const ProfileTitle = styled.h1`
  color: black;
`

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Righteous', cursive;
  color: black;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: black;
  font-size: 16px;
`


class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <Link to="/">
          <ProfileImage src={require('../assets/profile_pic.JPG')} alt='Trevor Gollaher'/>
          <ProfileTitle>TREVOR GOLLAHER</ProfileTitle>
        </Link>
        <div>
          <NavLink to='/'>ABOUT</NavLink>
          <NavLink to='/code'>PROJECTS</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
        </div>
        <hr/>
      </HeaderDiv>
    );
  }
}

export default Header;