import styled from "styled-components";

export const Heading = styled.h1`
  margin-block: 1rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: 600;
  text-align: center;
  color: ${(p) => p.theme.text.secondary};
`;

export const Section = styled.section`
  margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
  font-weight: 500;
  letter-spacing: 1px;
  color: ${(p) => p.theme.text.primary};
  margin-bottom: 1rem;
`;
export const SubTitle = styled.h3`
  font-weight: 500;
  font-size: 1.3rem;
  letter-spacing: 1px;
  color: ${(p) => p.theme.text.primary};
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  font-size: 1.25rem;
  line-height: 1.5em;
  margin-bottom: 0.5em;
  color: ${(p) => p.theme.text.secondary};
`;

export const Ul = styled.ul`
  font-size: 1.25rem;
  line-height: 1.5em;
  padding-left: 3rem;
  color: ${(p) => p.theme.text.secondary};
`;

export const Li = styled.li`
  font-size: 1.25rem;
  line-height: 1.5em;
  margin-bottom: 0.5em;
  color: ${(p) => p.theme.text.secondary};
`;

export const Table = styled.table`
  font-size: 1.25rem;
  border-collapse: collapse;
  border: 2px solid ${(p) => p.theme.text.disabled};
`;

export const Thead = styled.thead``;
export const TBody = styled.tbody`
  color: ${(p) => p.theme.text.secondary};
`;
export const Trow = styled.tr``;
export const Tdata = styled.td`
  padding-block: 0.25rem;
  padding-inline: 1rem;
  border: 2px solid ${(p) => p.theme.text.disabled};
`;
export const Theading = styled.th`
  letter-spacing: 1px;
  font-weight: 500;
  color: ${(p) => p.theme.text.secondary};
  background-color: rgba(255, 255, 255, 0.05);
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border: 2px solid ${(p) => p.theme.text.disabled};
`;
