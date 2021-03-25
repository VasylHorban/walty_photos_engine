import React, { ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useTypedSelector } from '../hooks';
import { cleanSearch, setInput } from '../redux/ducks/search';
import { StyledForm, StyledButton } from '../styled';
import { LastSearch } from './index';

const Search: React.FC = () => {
  const inputValue = useTypedSelector((state) => state.search.inputValue);
  const dispatch = useDispatch();

  const generateAddressBar = () : string => {
    let tags = inputValue !== '' ? inputValue : 'yellow flowers';
    return '/img/' + tags.split(' ').join('+');
  };
  const onChangeHandler = (event : ChangeEvent<HTMLInputElement>) : void => {
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
