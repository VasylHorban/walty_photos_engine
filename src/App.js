import React from "react";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ImageList, LastSearch, Search } from "./components/index.js";

const App = () => {
  return (
    <Container>
      <Search />
      <LastSearch />

      <Route path="/img/:tag?" render={() => <ImageList />} />

    </Container>
  );
};
export default App;
