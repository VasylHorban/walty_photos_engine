import React, { useCallback, useEffect, useRef, useState } from 'react';
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
const ImageList: React.FC<Props>= ({ tags }) => {
  const [isSendRequest, setSendRequest] = useState(true);
  const photos = useTypedSelector((state) => state.search.photos);
  const { isFetching, isAlert, alertText } = useTypedSelector(
    (state) => state.app
  );
  const observer = useRef(null);
  const dispatch = useDispatch();
  
  const lastElementRef = useCallback((node) => {
    if(isFetching) return;
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting) {
        dispatch(setIsFetching(true));
        setSendRequest(true);
      }
    })
    if(node) observer.current.observe(node)
  }, [isFetching]);

  useEffect(() => {
    if (isAlert) dispatch(hideAlert());
  }, [isAlert]);

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
        {photos.map((photo, index) => {
          if (photos.length === index + 1) {
             return <StyledCol ref ={lastElementRef} key={index} lg={4} md={6} sm={12}>
                <StyledCard>
                  <StyledCard.Img src={photo.webformatURL} />
                </StyledCard>
              </StyledCol>
          } else {
           return <StyledCol key={index} lg={4} md={6} sm={12}>
              <StyledCard>
                <StyledCard.Img src={photo.webformatURL} />
              </StyledCard>
            </StyledCol>;
          }
        })}
      </Row>
    </>
  );
};

export default ImageList;
