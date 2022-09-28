import styled from "styled-components";
import { Wrapper } from "../../styles/Wrapper.styles";

export const Header = styled(Wrapper)`
  padding-block: 1.5rem;
  background-color: ${(props) => props.theme.background[100]};
`;

export const LogoContainer = styled.a`
  cursor: pointer;
  display: block;
  height: 2rem;
  width: fit-content;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;
