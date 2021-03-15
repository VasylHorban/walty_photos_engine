import "./App.css";
import Search from "./components/Search/Search";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Container>
        <Search />
      </Container>
    </div>
  );
}

export default App;
