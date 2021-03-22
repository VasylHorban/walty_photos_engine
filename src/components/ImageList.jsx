import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Row } from "react-bootstrap";
import StyledCol from "../styled/ImageList/StyledCol";
import StyledCard from "../styled/ImageList/StyledCard";
import {
  requestPhotos,
  cleanPhotos,
} from "../redux/search.reducer";
import { setIsFetching } from "../redux/app.reducer";
const ImageList = (props) => {
  const [isSendRequest, setSendRequest] = useState(false)
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.search.photos);
  const isFetching = useSelector((state) => state.app.isFetching);

  const onScrollHendler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      !isFetching
    ) {
      dispatch(setIsFetching(true));
      setSendRequest(true)
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScrollHendler);
    return () => {
      document.removeEventListener("scroll", onScrollHendler);
    };
  }, []);
  useEffect(() => {
    dispatch(requestPhotos(props.tags));
    setSendRequest(false)
  }, [isSendRequest]);

  return (
    <>
      <Row>
        {photos.map((photo) => (
          <StyledCol key={photo.id} lg={4} md={6} sm={12}>
            <StyledCard>
              <StyledCard.Img src={photo.webformatURL} />
            </StyledCard>
          </StyledCol>
        ))}
      </Row>
      {/* {isAlert? <Alert text={alertText} /> : ''} */}
    </>
  );
};

export default ImageList;
