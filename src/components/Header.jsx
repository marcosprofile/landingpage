import React from 'react';

import {
  FlexContainer,
  StyledHeader,
  Link,
  Button,
  Image,
} from "../styles/Global.styled";

import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <StyledHeader
        top="1rem"
        right="8%"
        left="8%"
        bottom="1rem"
      >
        <FlexContainer
          justify="space-between"
          align="center"
        >
          <Image src={Logo} />
          <FlexContainer gap="2.25rem">
            <Link size="18px" href="#Home">Home</Link>
            <Link size="18px" href="#About">About Us</Link>
            <Link size="18px" href="#App">Our App</Link>
            <Link size="18px" href="#Contacts">Contacts</Link>
          </FlexContainer>
          
          <FlexContainer gap=".5rem">
            <Button>Log in</Button>
            <Button primary>Sign up</Button>
          </FlexContainer>
        </FlexContainer>
      </StyledHeader>
  )
}

export default Header;
