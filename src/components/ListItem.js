import React, { useState } from "react";
import styled from "styled-components";
import expandIcon from "../assets/expand-icon.svg";
import collapseIcon from "../assets/collapse-icon.svg";

const Container = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  box-sizing: border-box;
  padding: 28px 24px 28px 24px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (min-width: 720px) {
    width: 620px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconImage = styled.img`
  margin-left: 12px;
  width: 20px;
  height: 20px;
`;

const Title = styled.h3`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  color: #414141;
`;

const BottomWrapper = styled.div`
  margin-top: 20px;
  display: ${(props) => props.display};
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
`;

export default function ListItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { title, subtitle } = props;

  function handleClick(state, setter) {
    if (state === false) {
      setter(() => true);
    } else if (state === true) {
      setter(() => false);
    }
  }

  function setDisplay(state) {
    if (state === false) {
      return "none";
    } else if (state === true) {
      return "flex";
    }
  }

  let wrapperDisplay = setDisplay(isOpen);

  return (
    <Container onClick={() => handleClick(isOpen, setIsOpen)}>
      <HeaderWrapper>
        <Title>{title}</Title>
        <IconImage
          src={isOpen ? collapseIcon : expandIcon}
          // onClick={() => handleClick(isOpen, setIsOpen)}
        />
      </HeaderWrapper>
      <BottomWrapper display={wrapperDisplay}>
        <Subtitle>{subtitle}</Subtitle>
      </BottomWrapper>
    </Container>
  );
}
