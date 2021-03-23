import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Button } from "react-bootstrap";
import Alert from "./Alert";
import StyledCol from "../styled/ImageList/StyledCol";
import StyledCard from "../styled/ImageList/StyledCard";
import StyledLink from "../styled/ImageList/StyledLink";
import { requestPhotos } from "../redux/ducks/search";
import { hideAlert, setIsFetching } from "../redux/ducks/app";

const ImageList = (props) => {
  const [isSendRequest, setSendRequest] = useState(true);
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.search.photos);
  const isFetching = useSelector((state) => state.app.isFetching);
  const isAlert = useSelector((state) => state.app.isAlert);
  const alertText = useSelector((state) => state.app.alertText);

  const onScrollHendler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      !isFetching
    ) {
      dispatch(setIsFetching(true));
      setSendRequest(true);
    }
  };

  useEffect(() => {
    if (isAlert) dispatch(hideAlert());
  }, [isAlert]);

  useEffect(() => {
    document.addEventListener("scroll", onScrollHendler);
    return () => {
      document.removeEventListener("scroll", onScrollHendler);
    };
  }, []);

  useEffect(() => {
    if (isSendRequest) dispatch(requestPhotos(props.tags));
    setSendRequest(false);
  }, [isSendRequest]);

  return (
    <>
      {isAlert && <Alert text={alertText} />}
      <StyledLink to="/home">
        <Button>home page</Button>
      </StyledLink>
      <Row>
        {photos.map((photo, index) => (
          <StyledCol key={index} lg={4} md={6} sm={12}>
            <StyledCard>
              <StyledCard.Img src={photo.webformatURL} />
            </StyledCard>
          </StyledCol>
        ))}
      </Row>
    </>
  );
};

export default ImageList;
