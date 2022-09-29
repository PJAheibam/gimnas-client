import styled from "styled-components";

export const Heading = styled.h1`
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: 600;
  color: ${(p) => p.theme.text.secondary};
`;

export const Section = styled.section`
  margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
  font-weight: 500;
  letter-spacing: 1px;
  color: ${(p) => p.theme.text.secondary};
`;

export const Text = styled.p`
  color: ${(p) => p.theme.text.disabled};
`;
