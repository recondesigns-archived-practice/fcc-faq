import React from "react";
import styled from "styled-components";
import ListItem from "./components/ListItem";
import { faqs } from "./faqData";

const Container = styled.div`
  padding: 40px 16px 0px 16px;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f1f5f8;
  /* border: 2px solid lightcoral; */
`;

const Title = styled.h1`
  margin-bottom: 64px;
  font-size: 40px;
  line-height: 48px;
  font-family: "Great Vibes", cursive;
  text-align: center;
  color: #c59d5f;
  /* border: 1px dashed green; */

  @media (min-width: 720px) {
    width: 620px;
  }
`;

export default function App() {
  let data = faqs;
  console.log(data);
  return (
    <Container>
      <Title>{"App Component"}</Title>
      {data.map((faq) => {
        const { title, subtitle } = faq;
        return <ListItem title={title} subtitle={subtitle} />;
      })}
    </Container>
  );
}
