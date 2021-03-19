import React from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledForm from "../styled/Search/StyledForm";
import StyledButton from "../styled/Search/StyledButton";
import { setInput, requestPhotos } from "../redux/search.reducer";
import { NavLink } from "react-router-dom";

const Search = () => {
  const inputValue = useSelector((state) => state.search.inputValue);
  const dispatch = useDispatch();

  const submitHendler = (event) => {
    event.preventDefault();
    dispatch(requestPhotos());
  };

  const onChangeHendler = (event) => {
    dispatch(setInput(event.target.value));
  };

  return (
    <StyledForm onSubmit={submitHendler}>
      <StyledForm.Group>
        <StyledForm.Label>You can enter photo tags here</StyledForm.Label>
        <StyledForm.Control
          value={inputValue}
          type="text"
          placeholder="tags..."
          onChange={onChangeHendler}
        />
      </StyledForm.Group>
      <NavLink to ={`/img/${inputValue}` ocClick = {submitHendler}}>
        <StyledButton type="submit" >Search</StyledButton>
      </NavLink>
    </StyledForm>
  );
};

export default Search;
