import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  box-shadow: 0px 0px 7px -5px rgba(0, 0, 0, 0.95);
  padding: 1rem;
  border-radius: 0.4rem;
`;

const StyledButton = styled(Button)`
  display: block;
  margin: 0 auto;
  margin-top: 1.5rem;
`;

const StyledTag = styled.span`
  color: #ff1a1a;
  margin-right: 0.5rem;
  &:hover {
    text-decoration: underline;
    cursor : pointer
  }
`;

const Search = () => (
  <>
    <StyledRow>
      <Col lg={4}>
        <Form>
          <Form.Group>
            <Form.Label>You can enter photo tags here</Form.Label>
            <Form.Control type="text" placeholder="tags..." />
          </Form.Group>
        </Form>
      </Col>
      <Col lg={8}>
        <StyledTag>#img</StyledTag>
        <StyledTag>#nature</StyledTag>
        <StyledTag>#cars</StyledTag>
      </Col>
    </StyledRow>
    <StyledButton>Search</StyledButton>
  </>
);

export default Search;
