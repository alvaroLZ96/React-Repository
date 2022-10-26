import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const Song = ({ item }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  //const heroe = quiero seleccionar uno a uno en esta página los pintados por id y creo que debo hacaer un fetch individual por cada canción de la api
  return (
    <>
      <h3>Name: {item.title}</h3>
      <p>Genre:{item.genre}</p>
      <p>Duration:{item.duration}s</p>
      <img src={item.artwork["1000x1000"]} />

      <button
        onClick={() => {
          navigate("/music");
        }}
      ></button>
    </>
  );
};
export default Song;
