import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  color: white;
  background: ${(props) => props.inputColor || "lightgrey"};
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin: 1rem 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  &:hover {
    opacity: 0.8;
  }
`;

const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const Options = (props) => {

  return (
    <Container>
      <Button inputColor='#0B2E3B' onClick={props.handleSetCategoryFalse}>
        Sort By Difficutly
      </Button>
      <Button inputColor='#dc3545' onClick={props.handleSetCategoryTrue}>
        Sort By Category
      </Button>
      <Button inputColor='#28a745' onClick={props.handleSetSchedule}>
        Set Your Schedule
      </Button>
    </Container>
  );
};

export default Options;
