import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { cleanSearch, setInput } from '../redux/ducks/search';
import { StyledForm, StyledButton } from '../styled';
import { LastSearch } from './index';

const Search = () => {
  const inputValue = useSelector((state) => state.search.inputValue);
  const dispatch = useDispatch();

  const generateAddressBar = () => {
    let tags = inputValue !== '' ? inputValue : 'yellow flowers';
    return '/img/' + tags.split(' ').join('+');
  };
  const onChangeHandler = (event) => {
    dispatch(setInput(event.target.value));
  };

  useEffect(() => {
    dispatch(cleanSearch());
  }, []);

  return (
    <>
      <StyledForm>
        <StyledForm.Group>
          <StyledForm.Label>You can enter photo tags here</StyledForm.Label>
          <StyledForm.Control
            value={inputValue}
            type="text"
            placeholder="yellow flowers"
            onChange={onChangeHandler}
          />
        </StyledForm.Group>
      </StyledForm>
      <NavLink to={generateAddressBar()}>
        <StyledButton>Search</StyledButton>
      </NavLink>
      <LastSearch />
    </>
  );
};

export default Search;
