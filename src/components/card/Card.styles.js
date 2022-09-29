import styled from "styled-components";

export const Container = styled.div``;

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
