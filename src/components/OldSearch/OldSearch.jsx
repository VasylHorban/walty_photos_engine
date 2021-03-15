import React from "react";
import { Button } from "react-bootstrap";

const OldSearch = () => {
  return (
    <div className ="mt-3">
      <h3>Last search</h3>
      <div>
        <Button variant="light">First old search</Button>
        <Button variant="light">Second old search</Button>
        <Button variant="light">Third old search</Button>
      </div>
    </div>
  );
};

export default OldSearch;
