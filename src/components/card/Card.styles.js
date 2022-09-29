import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(p) => p.theme.background[200]};
  display: flex;
  flex-direction: column;
`;

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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-block: 1rem;
  padding-inline: 1rem;
`;

export const Time = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.span`
  color: ${(p) => p.theme.text.primary};
  font-weight: 500;
`;

export const TimeV = styled.span`
  color: ${(p) => p.theme.text.secondary};
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: ${(p) => p.theme.palette.secondary};
  padding: 0.5em 1em;
  text-align: center;
  &:active {
    scale: 0.99;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 1rem;
  margin-bottom: 1rem;
  margin-top: auto;
`;

export const Added = styled.p`
  user-select: none;
  pointer-events: none;
  text-align: right;
  color: hsla(0, 0%, 93%, 0.25);
`;
