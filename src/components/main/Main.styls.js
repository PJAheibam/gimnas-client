import styled from "styled-components";
import { Wrapper as Wrpr } from "../../styles/Wrapper.styles";

export const Wrapper = styled(Wrpr)`
  margin-top: 2rem;
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

export const Card = styled.div``;

export const ImageContainer = styled.figure`
  width: 100%;
  height: 10rem;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 1.15rem;
  color: ${(p) => p.theme.text.primary};
`;

export const Desc = styled.p`
  color: ${(p) => p.theme.text.secondary};
`;

export const Container = styled.article``;
