import "./App.css";
import Search from "./components/Search/Search";
import { Container } from "react-bootstrap";
import ImageList from "./components/ImageList/ImageList";
function App() {
  return (
    <div className="App">
      <Container>
        <Search />
        <ImageList/>
      </Container>
    </div>
  );
}

export default App;
