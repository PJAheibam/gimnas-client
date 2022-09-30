import React from "react";
import { Container } from "../main/Main.styls";
import {
  Title,
  Text,
  Heading,
  Section,
  SubTitle,
  Ul,
  Li,
  Table,
  Thead,
  TBody,
  Theading,
  Trow,
  Tdata,
} from "./Blog.styles";

const Blog = () => {
  return (
    <Container>
      <Heading>Blog</Heading>
      <Section>
        <Title>1. How does react work?</Title>
        <Text>
          React uses a declarative paradigm that makes it easier to reason about
          your application and aims to be both efficient and flexible. It
          designs simple views for each state in your application, and React
          will efficiently update and render just the right component when your
          data changes. The declarative view makes your code more predictable
          and easier to debug.
        </Text>
        <Text>
          React uses a declarative paradigm that makes it easier to reason about
          your application and aims to be both efficient and flexible. It
          designs simple views for each state in your application, and React
          will efficiently update and render just the right component when your
          data changes. The declarative view makes your code more predictable
          and easier to debug.
        </Text>
        <Text>
          A React application is made of multiple components, each responsible
          for rendering a small, reusable piece of HTML. Components can be
          nested within other components to allow complex applications to be
          built out of simple building blocks. A component may also maintain an
          internal state – for example, a TabList component may store a variable
          corresponding to the currently open tab.
        </Text>
        <Text>
          Note: React is not a framework. It is just a library developed by
          Facebook to solve some problems that we were facing earlier.
        </Text>
      </Section>
      <Section>
        <Title>2. Prop vs State</Title>
        <Table>
          <Thead>
            <Trow>
              <Theading>Props</Theading>
              <Theading>State</Theading>
            </Trow>
          </Thead>
          <TBody>
            <Trow>
              <Tdata>Props are read-only.</Tdata>
              <Tdata>State changes can be asynchronous.</Tdata>
            </Trow>
            <Trow>
              <Tdata>Props are immutable.</Tdata>
              <Tdata> State is mutable.</Tdata>
            </Trow>
            <Trow>
              <Tdata>
                Props allow you to pass data from one component to other
                components as an argument.
              </Tdata>
              <Tdata>State holds information about the components.</Tdata>
            </Trow>
            <Trow>
              <Tdata>Props can be accessed by the child component.</Tdata>
              <Tdata>State cannot be accessed by child components.</Tdata>
            </Trow>
            <Trow>
              <Tdata> Stateless component can have Props.</Tdata>
              <Tdata>Stateless components cannot have State.</Tdata>
            </Trow>
            <Trow>
              <Tdata>Props make components reusable.</Tdata>
              <Tdata>State cannot make components reusable.</Tdata>
            </Trow>
            <Trow>
              <Tdata>
                Props are external and controlled by whatever renders the
                component.
              </Tdata>
              <Tdata>
                The State is internal and controlled by the React Component
                itself.
              </Tdata>
            </Trow>
          </TBody>
        </Table>
      </Section>
      <Section>
        <Title>
          3. <i>useEffect</i> hook
        </Title>
        <Text>
          useEffect after render: We know that, the useEffect() is used for
          causing side effects in functional components and it is also capable
          for handling componentDidMount(), componentDidUpdate() and
          componentWillUnmount() life-cycle methods of class based components
          into functional component.
        </Text>
        <SubTitle>useEffect use cases</SubTitle>
        <Ul>
          <Li>Running once on mount: fetch API data</Li>
          <Li>Running on state change: validating input field</Li>
          <Li>Running on state change: live filtering</Li>
          <Li>Running on state change: trigger animation on new array value</Li>
          <Li>
            Running on props change: update paragraph list on fetched API data
            update
          </Li>
          <Li>
            Running on props change: updating fetched API data to get BTC
            updated price
          </Li>
        </Ul>
      </Section>
    </Container>
  );
};

export default Blog;
