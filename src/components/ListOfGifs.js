import { useEffect, useState } from "react";
import gifFetch from "../services/giphy";
import Gif from "./Gifs";

export default function ListOfGif({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await gifFetch(keyword, 10);
      setGifs(data);
    };

    getData();
  }, [keyword]);

  return (
    <div key={1}>
      <div>
        {gifs.map((gif) => {
          return <Gif gif={gif}></Gif>;
        })}
      </div>
    </div>
  );
}
