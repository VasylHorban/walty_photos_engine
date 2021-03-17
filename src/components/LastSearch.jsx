import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledWapper = styled.div`
  margin-top : 1rem;

`
const LastSearch = () => (
  <StyledWapper>
    <h3>Last search</h3>
    <div>
      <Button variant="light">First old search</Button>
      <Button variant="light">Second old search</Button>
      <Button variant="light">Third old search</Button>
    </div>
  </StyledWapper>
);

export default LastSearch;
