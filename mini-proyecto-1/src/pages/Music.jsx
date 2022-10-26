import { useState, useEffect } from "react";
import Song from "./Song";

const Music = () => {
  const [songsList, setSongsList] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await fetch(
        "https://discoveryprovider.audius.co/v1/tracks/trending?app_name=ExampleApp"
      ).then((res) => res.json());
      setSongsList(data.data);
    })();
  }, []);

  return (
    <>
      <h1> SONGS 🎵</h1>
      {songsList.map((song) => (
        <Song key={song.id} item={song} />
      ))}
    </>
  );
};

export default Music;
