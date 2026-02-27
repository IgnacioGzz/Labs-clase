import { useState, useEffect, useRef } from "react";
import "./LoginForm.css";

export const LoginForm = () => {

  const inputRef = useRef();

  const [formState, setFormState] = useState({
    matricula: "",
    nombre: "",
    apellidos: "",
    edad: "",
    universidad: "",
    carrera: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const { matricula, nombre, apellidos, edad, universidad, carrera } = formState;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    console.log("Formulario actualizado:", formState);
  }, [formState]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formState);
  };

  return (
    <div className="container">
      <div className="card">

        <h2>Formulario Tipo Login</h2>

        <form onSubmit={onSubmit}>

          <input
            ref={inputRef}
            type="text"
            placeholder="Matricula"
            name="matricula"
            value={matricula}
            onChange={onInputChange}
          />

          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={nombre}
            onChange={onInputChange}
          />

          <input
            type="text"
            placeholder="Apellidos"
            name="apellidos"
            value={apellidos}
            onChange={onInputChange}
          />

          <input
            type="number"
            placeholder="Edad"
            name="edad"
            value={edad}
            onChange={onInputChange}
          />

          <input
            type="text"
            placeholder="Universidad"
            name="universidad"
            value={universidad}
            onChange={onInputChange}
          />

          <input
            type="text"
            placeholder="Carrera"
            name="carrera"
            value={carrera}
            onChange={onInputChange}
          />

          <button type="submit">Enviar</button>
        </form>

        {submittedData && (
          <div className="result">
            <h3>Datos Ingresados:</h3>
            <p>Matricula: {submittedData.matricula}</p>
            <p>Nombre: {submittedData.nombre}</p>
            <p>Apellidos: {submittedData.apellidos}</p>
            <p>Edad: {submittedData.edad}</p>
            <p>Universidad: {submittedData.universidad}</p>
            <p>Carrera: {submittedData.carrera}</p>
          </div>
        )}

      </div>
    </div>
  );
};