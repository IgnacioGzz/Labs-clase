import { useRef } from "react";

export const Focus = () => {

  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Pantalla Focus</h1>
      <hr />

      <input
        type="text"
        placeholder="Nombre"
        className="form-control"
      />

      <input
        type="text"
        placeholder="Apellido"
        className="form-control mt-2"
      />

      <input
        ref={inputRef}
        type="text"
        placeholder="Edad"
        className="form-control mt-2"
      />

      <textarea
        placeholder="Comentarios"
        className="form-control mt-2"
      ></textarea>

      <button
        className="btn btn-primary mt-3"
        onClick={onClick}
      >
        Set focus
      </button>
    </>
  );
};