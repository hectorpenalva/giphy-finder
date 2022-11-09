import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function SubMenu({ setKeyword, showGifs, setShowGifs }) {
  const TRENDING_TOPICS = ["Rick", "Morty", "Francia", "España"];
  return (
    <Container className="py-3">
      <Button variant="outline-danger" onClick={() => setShowGifs(!showGifs)}>
        {showGifs ? "OCULTAR" : "MOSTRAR"} GIFS
      </Button>{" "}
      {TRENDING_TOPICS.map((topic) => {
        return (
          <Button
            className="mx-1"
            variant="outline-primary"
            onClick={() => setKeyword(topic)}
          >
            {topic}
          </Button>
        );
      })}
    </Container>
  );
}
