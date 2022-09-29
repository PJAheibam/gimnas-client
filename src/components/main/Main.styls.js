import styled from "styled-components";
import { Wrapper as Wrpr } from "../../styles/Wrapper.styles";

export const Wrapper = styled(Wrpr)`
  margin-top: 100px;
`;

export const Heading = styled.h1`
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 2rem;
`;

export const Cards = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  gap: 2rem;
`;

export const Container = styled.article``;
