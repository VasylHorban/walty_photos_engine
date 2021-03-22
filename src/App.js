import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ImageList, Search } from "./components/index.js";

const App = () => {
  return (
    <Container>
      <Route path="/home" render={() => <Search />} />
      <Route path="/img/:tags" render={(props) => <ImageList tags = {props.match.params.tags}/>} />
      <Redirect path="/" to="/home" />
    </Container>
  );
};
export default App;
