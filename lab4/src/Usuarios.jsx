import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, nombre: "Juan Perez", empresa: "Recursos Humanos" },
  { id: 2, nombre: "Maria Lopez", empresa: "Finanzas" },
  { id: 3, nombre: "Carlos Ramirez", empresa: "TI" },
  { id: 4, nombre: "Ana Torres", empresa: "Marketing" },
  { id: 5, nombre: "Luis Gomez", empresa: "Ventas" },
];

class Empleados extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      empresa: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({ modalInsertar: true });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  insertar = () => {
    let valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;

    let lista = this.state.data;
    lista.push(valorNuevo);

    this.setState({ data: lista, modalInsertar: false });
  };

  editar = (dato) => {
    let contador = 0;
    let arreglo = this.state.data;

    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].empresa = dato.empresa;
      }
      contador++;
    });

    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    let opcion = window.confirm(
      "¿Estás seguro que deseas eliminar al empleado " + dato.id + "?"
    );

    if (opcion) {
      let contador = 0;
      let arreglo = this.state.data;

      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });

      this.setState({ data: arreglo });
    }
  };

  render() {
    return (
      <Container>
        <h2 className="text-center">Lista de Empleados</h2>

        <Button color="success" onClick={this.mostrarModalInsertar}>
          Agregar empleado
        </Button>

        <br />
        <br />

        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Departamento</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.nombre}</td>
                <td>{dato.empresa}</td>

                <td>
                  <Button
                    color="primary"
                    onClick={() => this.mostrarModalActualizar(dato)}
                  >
                    Editar
                  </Button>{" "}
                  <Button color="danger" onClick={() => this.eliminar(dato)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* MODAL INSERTAR */}

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <h3>Agregar empleado</h3>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>ID</label>
              <input
                className="form-control"
                readOnly
                value={this.state.data.length + 1}
              />
            </FormGroup>

            <FormGroup>
              <label>Nombre</label>
              <input
                className="form-control"
                name="nombre"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Departamento</label>
              <input
                className="form-control"
                name="empresa"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.insertar}>
              Guardar
            </Button>

            <Button color="danger" onClick={this.cerrarModalInsertar}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        {/* MODAL EDITAR */}

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <h3>Editar empleado</h3>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>ID</label>
              <input
                className="form-control"
                readOnly
                value={this.state.form.id}
              />
            </FormGroup>

            <FormGroup>
              <label>Nombre</label>
              <input
                className="form-control"
                name="nombre"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>

            <FormGroup>
              <label>Departamento</label>
              <input
                className="form-control"
                name="empresa"
                onChange={this.handleChange}
                value={this.state.form.empresa}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Guardar cambios
            </Button>

            <Button color="danger" onClick={this.cerrarModalActualizar}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default Empleados;