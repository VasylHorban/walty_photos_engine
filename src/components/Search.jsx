import React from "react";
import { Form, Col } from "react-bootstrap";
import StyledRow from '../styled/Search/StyledRow'
import StyledTag from '../styled/Search/StyledTag'
import StyledButton from '../styled/Search/StyledButton'


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
