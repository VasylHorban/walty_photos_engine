import React from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledWrapper from "../styled/LastSearch/StyledWrapper";
import StyledTag from "../styled/LastSearch/StyledTag";
import { setInput } from "../redux/ducks/search";

const LastSearch = () => {
  const tags = useSelector((state) => state.search.tagStorage);
  const dispatch = useDispatch();
  const onclickHendler = (tags) => {
    dispatch(setInput(tags));
  };
  return (
    <StyledWrapper>
      <h3>Last search</h3>
      <div>
        {tags.length === 0 && <p>No tags yet...</p>}
        {tags.map((tag) => (
          <StyledTag
            key={tag.id}
            onClick={onclickHendler.bind(null, tag.text)}
            variant="light"
          >
            {tag.text}
          </StyledTag>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default LastSearch;
