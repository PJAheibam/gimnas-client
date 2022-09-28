import styled, { css } from "styled-components";
import FocusStyles from "../../styles/FocusStyles";

const openStyles = css`
  left: 0;
  padding-inline: max(1.5rem, calc(100vw - 80rem));
`;

const easing = "cubic-bezier(0.38, 0.41, 0.3, 1.07)";

export const Container = styled.aside`
  position: fixed;
  top: 0;
  padding: 1.5rem;
  padding-top: 0.95rem;
  left: calc(100vw - max(1.5rem, calc(100vw - 80rem)) - 4.3rem);
  ${(p) => (p.isopen ? openStyles : "")}
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.isopen ? props.theme.background[300] : "transparent"};
  /* background-color: rgba(0, 0, 0, 0.35); */
  transition: left 1000ms ${easing}, background-color 1000ms ${easing};
`;

export const Wrapper = styled.section``;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  background-color: ${(p) =>
    p.isactive === "true" ? p.theme.background[100] : "transparent"};
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
  &:active {
    scale: 0.975;
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

export const Name = styled.h3`
  letter-spacing: 1px;
`;

export const Location = styled.p`
  color: ${(p) => p.theme.text.secondary};
`;

export const Info = styled.div`
  opacity: ${(p) => (p.isopen ? 1 : 0)};
  transition: opacity 700ms ease-out;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  margin-block: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${(p) => p.theme.background[200]};
  opacity: ${(p) => (p.isopen ? 1 : 0)};
  transition: opacity 700ms ease-out;
`;

export const Prop = styled.p`
  color: ${(p) => p.theme.text.secondary};
  text-align: center;
`;

export const Value = styled.h3`
  position: relative;
  text-align: center;
  color: ${(p) => p.theme.text.primary};
  &::after {
    position: absolute;
    top: 30%;
    content: attr(data-unit);
    color: ${(p) => p.theme.text.disabled};
    font-weight: normal;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
`;

export const Heading = styled.h3`
  margin-top: 2rem;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: capitalize;
  opacity: ${(p) => (p.isopen ? 1 : 0)};
  transition: opacity 700ms ease-out;
`;
export const SubHeading = styled.h4`
  font-weight: 400;
  letter-spacing: 1px;
`;

export const BreakBtn = styled(Button)`
  padding: 1rem;
  font-size: 1.15rem;
  font-weight: 500;
  text-align: center;
  color: ${(p) => p.theme.text.secondary};
  &:hover {
    color: ${(p) => p.theme.text.hovered};
    background-color: ${(p) => p.theme.background[100]};
  }
`;

export const Time = styled.p`
  color: ${(p) => p.theme.text.disabled};
`;

export const CompletedBtn = styled(Button)`
  margin-inline: auto;
  height: auto;
  width: auto;
  border-radius: 0;
  font-size: 1.15rem;
  padding: 0.5em 1em;
  background-color: ${(p) => p.theme.palette.primaryBg};
  opacity: ${(p) => (p.isopen ? 1 : 0)};
  transition: opacity 700ms ease-out, background-color 300ms ease;
  &:hover {
    background-color: ${(p) => p.theme.palette.primaryHovered};
  }
`;
