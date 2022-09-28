import React from "react";
import { Header as HD, Image, LogoContainer } from "./Header.styles";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <HD as="header">
      <LogoContainer href="/">
        <Image src={logo} />
      </LogoContainer>
    </HD>
  );
};

export default Header;
