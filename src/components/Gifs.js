import Figure from "react-bootstrap/Figure";

export default function Gif({ gif }) {
  return (
    <Figure key={gif.id}>
      <Figure.Image
        className="shadow m-1"
        height={100}
        alt={gif.title}
        src={gif.url}
      />
      <Figure.Caption>{gif.title}</Figure.Caption>
    </Figure>
  );
}
