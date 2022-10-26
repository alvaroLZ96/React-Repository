import { useState, useEffect } from "react";
import Song from "./Song";
import { Link, Outlet } from "react-router-dom";

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
      <div>
        <h1> SONGS 🎵</h1>
        <ul>
          {songsList.map((song) => (
            <li key={song.id}>
              <Link to={`/music/${song.id}`}>
                <Song item={song} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Music;
