import { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Menu from "./components/Menu";
import SubMenu from "./components/SubMenu";
import ListOfGif from "./components/ListOfGifs";

export default function App() {
  const [showGifs, setShowGifs] = useState(true);
  const [keyword, setKeyword] = useState("panda");

  return (
    <div className="App">
      <Menu setKeyword={setKeyword}></Menu>
      <SubMenu
        setKeyword={setKeyword}
        showGifs={showGifs}
        setShowGifs={setShowGifs}
      ></SubMenu>
      <Container>
        {showGifs ? <ListOfGif keyword={keyword}></ListOfGif> : "GIFS OCULTOS"}
      </Container>
    </div>
  );
}
