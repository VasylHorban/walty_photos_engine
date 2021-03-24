import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setInput } from '../redux/ducks/search';
import { LastSearchWrapper, StyledTag } from '../styled';

const LastSearch = () => {
  const tags = useSelector((state) => state.search.tagStorage);
  const dispatch = useDispatch();

  const onclickHandler = (tags) => {
    dispatch(setInput(tags));
  };

  return (
    <LastSearchWrapper>
      <h3>Last search</h3>
      <div>
        {tags.length === 0 && <p>No tags yet...</p>}
        {tags.map((tag) => (
          <StyledTag
            key={tag.id}
            onClick={onclickHandler.bind(null, tag.text)}
            variant="light"
          >
            {tag.text}
          </StyledTag>
        ))}
      </div>
    </LastSearchWrapper>
  );
};

export default LastSearch;
