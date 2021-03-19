import React from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledWrapper from "../styled/LastSearch/StyledWrapper";
import StyledTag from "../styled/LastSearch/StyledTag";
import { setInput } from "../redux/search.reducer";

const LastSearch = () => {
  const tags = useSelector(state => state.search.tagStorage);
  const dispatch = useDispatch()
  const onclickHendler = (tag) => {
    dispatch(setInput(tag));
  }
  return (
    <StyledWrapper>
      <h3>Last search</h3>
      <div>
        {tags.map((tag) => (
          <StyledTag key = {tag.id} onClick = {onclickHendler.bind(null,tag.text)} variant="light">#{tag.text}</StyledTag>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default LastSearch;
