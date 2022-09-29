import React from "react";
import { Container, Logo, LogoContainer, CopyRight } from "./Footer.styles";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} alt="footer logo" />
      </LogoContainer>
      <CopyRight>&copy;Copyright 2022 | PJ, Programming Hero</CopyRight>
    </Container>
  );
};

export default Footer;
