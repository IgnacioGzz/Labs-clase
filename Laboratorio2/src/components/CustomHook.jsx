import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "./Loading";
import { Card } from "./Card";

export const CustomHook = () => {

  const { counter, increment, decrement } = useCounter(0);

  const { data, isLoading } = useFetch(
    `https://itunes.apple.com/search?term=rock&entity=song&limit=500`
  );

  const song = data?.results?.[counter];

  return (
    <>
      <h1>Fetch API de Música 🎵</h1>

      {isLoading ? (
        <Loading />
      ) : (
        song && (
          <Card
            id={counter + 1}
            name={song.trackName}
            artist={song.artistName}
            image={song.artworkUrl100}
          />
        )
      )}

      <button
        className="btn btn-primary"
        onClick={() => decrement()}
      >
        Anterior
      </button>

      <button
        className="btn btn-primary"
        onClick={() => increment()}
      >
        Siguiente
      </button>
    </>
  );
};