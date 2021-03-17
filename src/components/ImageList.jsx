import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const StyledCol = styled(Col)`
  margin-top: 1rem;
  padding: 0.4rem;
`;

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
