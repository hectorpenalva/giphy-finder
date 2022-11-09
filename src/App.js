import { useState } from "react";
import "./App.css";
import ListOfGif from "./components/ListOfGifs";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function App() {
  const [keyword, setKeyword] = useState("panda");
  const [showGifs, setShowGifs] = useState(true);

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="App">
      <Form
        className="App d-flex align-items-center justify-content-center"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Que Gifs quieres buscar?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter gif"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <Button variant="outline-primary" onClick={() => setShowGifs(!showGifs)}>
        {showGifs ? "OCULTAR" : "MOSTRAR"} GIFS
      </Button>{" "}
      <Button variant="outline-primary" onClick={() => setKeyword("españa")}>
        ESPAÑA
      </Button>{" "}
      <Button
        variant="outline-primary"
        onClick={() => setKeyword("breakingbad")}
      >
        BREAKING BAD
      </Button>{" "}
      {showGifs ? <ListOfGif keyword={keyword}></ListOfGif> : "NO HAY GIFS"}
    </div>
  );
}
