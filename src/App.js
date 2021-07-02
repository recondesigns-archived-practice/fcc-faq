import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid lightcoral;
`;

const Title = styled.h1`
  font-family: "Great Vibes", cursive;
  border: 1px dashed green;
`;

const OtherText = styled.h2`
  font-family: "Open Sans", sans-serif;
  border: 1px dashed green;
`;

export default function App() {
  return (
    <Container>
      <Title>{"App Component"}</Title>
      <OtherText>{"Other text"}</OtherText>
    </Container>
  );
}
