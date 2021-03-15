import { Form, Button } from "react-bootstrap";

const Search = () => {
  return (
    <>
      <Form className="mt-4 p-3 rounded row d-flex align-items-center shadow">
        <Form.Group className="col-lg-3">
          <Form.Label>You can enter photo tags here</Form.Label>
          <Form.Control type="text" placeholder="tags..." />
        </Form.Group>
        <div className="col-lg-9">old tags...</div>
      </Form>
      <div className="row">
        <Button className="mt-3 col">Search</Button>
      </div>
    </>
  );
};

export default Search;
