import React from "react";
import { Card } from "react-bootstrap";

const ImageList = () => {
  return <div className ="row">
    <Card className ="shadow-sm mt-3 img-thumbnail col-lg-4 col-md-6 col-sm-12" >
      <Card.Img src="https://dummyimage.com/600x400/ebe6eb/959ade.jpg&text=mock+img" />
    </Card>
    <Card className ="shadow-sm mt-3 img-thumbnail  col-lg-4 col-md-6 col-sm-12">
      <Card.Img src="https://dummyimage.com/600x400/ebe6eb/959ade.jpg&text=mock+img" />
    </Card>
    <Card className ="shadow-sm mt-3 img-thumbnail  col-lg-4 col-md-6 col-sm-12">
      <Card.Img src="https://dummyimage.com/600x400/ebe6eb/959ade.jpg&text=mock+img" />
    </Card>
  </div>;
};

export default ImageList;
