import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

export default function Menu({ setKeyword }) {
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">🔍 Giphy Finder</Navbar.Brand>
          <Form
            className=" d-flex align-items-center justify-content-center"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Buscar gif..."
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}
