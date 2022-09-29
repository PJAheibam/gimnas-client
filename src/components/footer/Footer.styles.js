import styled from "styled-components";
import { Wrapper } from "../../styles/Wrapper.styles";
import { device } from "../../utils/device";

export const Container = styled(Wrapper)`
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  margin-top: 2.5rem;
  background-color: ${(p) => p.theme.background[200]};
  @media ${device.xl} {
    width: calc(100% - 406px);
  }
`;

export const Logo = styled.img`
  height: 2rem;
`;

export const CopyRight = styled.p`
  text-align: center;
  font-size: 0.85rem;
  color: ${(p) => p.theme.text.secondary};
`;

export const LogoContainer = styled.a`
  cursor: pointer;
  display: block;
  margin-bottom: 2rem;
`;
