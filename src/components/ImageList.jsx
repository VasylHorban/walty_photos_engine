import React from "react";
import { Card, Row } from "react-bootstrap";
import StyledCol from "./../styled/ImageList/StyledCol";

const ImageList = () => (
  <Row>
    <StyledCol lg={4} md={6} sm={12}>
      <Card>
        <Card.Img src="https://dummyimage.com/600x400/ebe6eb/959ade.jpg&text=mock+img" />
      </Card>
    </StyledCol>
    <StyledCol lg={4} md={6} sm={12}>
      <Card>
        <Card.Img src="https://dummyimage.com/600x400/ebe6eb/959ade.jpg&text=mock+img" />
      </Card>
    </StyledCol>
    <StyledCol lg={4} md={6} sm={12}>
      <Card>
        <Card.Img src="https://dummyimage.com/600x400/ebe6eb/959ade.jpg&text=mock+img" />
      </Card>
    </StyledCol>
  </Row>
);

export default ImageList;
