import React from "react";
import { Form, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import StyledRow from "../styled/Search/StyledRow";
import StyledTag from "../styled/Search/StyledTag";
import StyledButton from "../styled/Search/StyledButton";
import { setInput } from "../redux/search.reducer";

const Search = () => {
  const inputValue = useSelector((state) => state.search.inputValue);
  const dispatch = useDispatch();

  const submitHendler = (event) => {
    event.preventdefault()
    console.log(event.target.value)
  } 

  const onChangeHendler = (event) => {
    dispatch(setInput(event.target.value))
    console.log()
  }

  return (
    <Form onSubmit = {submitHendler}>
      <StyledRow>
        <Col lg={4}>
          <Form.Group>
            <Form.Label>You can enter photo tags here</Form.Label>
            <Form.Control
              value={inputValue}
              type="text"
              placeholder="tags..."
              onChange = {onChangeHendler}
            />
          </Form.Group>
        </Col>
        <Col lg={8}>
          <StyledTag>#img</StyledTag>
          <StyledTag>#nature</StyledTag>
          <StyledTag>#cars</StyledTag>
        </Col>
      </StyledRow>
      <StyledButton type ="submit">Search</StyledButton>
    </Form>
  );
};

export default Search;
