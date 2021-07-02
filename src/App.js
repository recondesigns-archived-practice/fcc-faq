import React from "react";
import styled from "styled-components";
import ListItem from "./components/ListItem";

const Container = styled.div`
  padding: 40px 16px 0px 16px;
  position: relative;
  height: 100vh;
  background: #f1f5f8;
  border: 2px solid lightcoral;
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 48px;
  font-family: "Great Vibes", cursive;
  text-align: center;
  color: #c59d5f;
  border: 1px dashed green;
`;

export default function App() {
  return (
    <Container>
      <Title>{"App Component"}</Title>
      <ListItem
        title={"Do you accept all major credit cards?"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit."
        }
      />
    </Container>
  );
}
