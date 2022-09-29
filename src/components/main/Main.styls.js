import styled from "styled-components";
import { Wrapper as Wrpr } from "../../styles/Wrapper.styles";
import { device } from "../../utils/device";

export const Wrapper = styled(Wrpr)`
  margin-top: 120px;
`;

export const Heading = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 2rem;
`;

export const Cards = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 2rem;
  @media ${device.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.xl} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Container = styled.article`
  @media ${device.xl} {
    width: calc(100% - 20rem);
  }
`;
