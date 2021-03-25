import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Button } from 'react-bootstrap';

import { requestPhotos } from '../redux/ducks/search';
import { hideAlert, setIsFetching } from '../redux/ducks/app';
import { Alert } from './index';
import { StyledCol, StyledCard, StyledLink } from '../styled';
import { useTypedSelector } from '../hooks';

type Props = {
  tags : string
}
const ImageList : React.FC<Props> = ({ tags }) => {
  const [isSendRequest, setSendRequest] = useState(true);
  const photos = useTypedSelector((state) => state.search.photos);
  const {isFetching, isAlert, alertText} = useTypedSelector((state) => state.app);
  const dispatch = useDispatch();

  
const onScrollHandler = (event : React.UIEvent<HTMLDocument>) : void => {
    let page = event.target.documentElement;
    if (
      page.scrollHeight - (page.scrollTop + window.innerHeight) < 100 &&
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
    document.addEventListener('scroll', onScrollHandler);
    return () => {
      document.removeEventListener('scroll', onScrollHandler);
    };
  }, []);

  useEffect(() => {
    if (isSendRequest) dispatch(requestPhotos(tags));
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
