import React from "react";
import styled from "styled-components";
import expandIcon from "../assets/expand-icon.svg";

const Container = styled.div`
  padding: 28px 24px 28px 24px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  /* border: 1px solid dodgerblue; */
`;

const HeaderWrapper = styled.div`
  /* margin-bottom: 20px; */
  display: flex;
  /* align-items: center; */
  /* border: 1px solid black; */
`;

const IconImage = styled.img`
  margin-left: 12px;
  width: 20px;
  height: 20px;
  border: 1px dashed green;
`;

const Title = styled.h3`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  color: #414141;
  border: 1px dashed green;
`;

const BottomWrapper = styled.div`
  margin-top: 20px;
  display: none;
  border-top: 1px solid rgba(65, 65, 65, 0.4); /* border: 1px solid red; */
`;

const Subtitle = styled.h3`
  margin-top: 20px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  color: #414141;
  opacity: 0.6;
  border: 1px dashed green;
`;

export default function ListItem(props) {
  const { title, subtitle } = props;

  return (
    <Container>
      <HeaderWrapper>
        <Title>{title}</Title>
        <IconImage src={expandIcon} />
      </HeaderWrapper>
      <BottomWrapper>
        <Subtitle>{subtitle}</Subtitle>
      </BottomWrapper>
    </Container>
  );
}
