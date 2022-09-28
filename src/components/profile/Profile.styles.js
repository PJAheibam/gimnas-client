import styled from "styled-components";
import FocusStyles from "../../styles/FocusStyles";

export const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.background[300]};
  /* background-color: rgba(0, 0, 0, 0.35); */
`;

export const Wrapper = styled.section`
  padding: 1.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  outline: none;
  border: none;
  display: block;
  height: 2.75rem;
  width: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &:focus-visible {
    ${FocusStyles}
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Name = styled.h3``;

export const Location = styled.p`
  color: ${(p) => p.theme.text.secondary};
`;

export const Info = styled.div``;

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;

export const Prop = styled.p`
  color: ${(p) => p.theme.text.secondary};
  text-align: center;
`;

export const Value = styled.h3`
  text-align: center;
  color: ${(p) => p.theme.text.primary};
`;
