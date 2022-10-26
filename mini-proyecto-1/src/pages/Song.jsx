import React from "react";

const Song = ({ item }) => {
  return (
    <div class={item.id}>
      <h3>Name: {item.title}</h3>
      <p>Genre:{item.genre}</p>
      <p>Duration:{item.duration}s</p>
      <img src={item.artwork["1000x1000"]} />
    </div>
  );
};
export default Song;
