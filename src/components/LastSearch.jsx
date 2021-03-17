import React from "react";
import { Button } from "react-bootstrap";
import StyledWrapper from "../styled/LastSearch/StyledWrapper";

const LastSearch = () => (
  <StyledWrapper>
    <h3>Last search</h3>
    <div>
      <Button variant="light">First old search</Button>
      <Button variant="light">Second old search</Button>
      <Button variant="light">Third old search</Button>
    </div>
  </StyledWrapper>
);

export default LastSearch;
