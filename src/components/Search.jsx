import React, { useState } from "react";
import StyledForm from "../styled/Search/StyledForm";
import StyledButton from "../styled/Search/StyledButton";
import { NavLink } from "react-router-dom";
import LastSearch from "./LastSearch";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const onChangeHendler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <StyledForm>
        <StyledForm.Group>
          <StyledForm.Label>You can enter photo tags here</StyledForm.Label>
          <StyledForm.Control
            value={inputValue}
            type="text"
            placeholder="yellow flowers"
            onChange={onChangeHendler}
          />
        </StyledForm.Group>
      </StyledForm>
      <NavLink to={`/img/${inputValue}`}>
        <StyledButton>Search </StyledButton>
      </NavLink>

      <LastSearch />
    </>
  );
};

export default Search;
