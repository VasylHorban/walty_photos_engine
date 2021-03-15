import "./App.css";
import React from "react";
import Search from "./components/Search/Search";
import { Container } from "react-bootstrap";
import ImageList from "./components/ImageList/ImageList";
import OldSearch from "./components/OldSearch/OldSearch";
function App() {
  return (
    <div className="App">
      <Container>
        <Search />
        <OldSearch/>
        <ImageList />
      </Container>
    </div>
  );
}

export default App;
