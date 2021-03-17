import React from "react";
import { Container } from "react-bootstrap";
import { ImageList, LastSearch, Search } from "./components/index.js";

const App = () => (
  <Container>
    <Search />
    <LastSearch />
    <ImageList />
  </Container>
);

export default App;
