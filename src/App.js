import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';


class App extends Component {

  state = {
    citas: []
  }

  //Debido a que no podemos pasar info de hijo a padre, creamos una función para hacerlo
  crearNuevaCita = datos => {
    
    // copiar el state actual
    const citas = [...this.state.citas, datos];

    // Agregar el nuevo state
    this.setState({
      citas
    })
  }

  // Elimina las citas del tate
  eliminarCita = id => {
    // Tomar copia del state
    const citasActuales = [...this.state.citas];

    // Utilizar filtes para sacar el elemento id del arrreglo
    const citas = citasActuales.filter( cita => cita.id !== id )

    // Actualizar el state
    this.setState({
      citas
    })

  }

  render(){
    return (
      <div className="container">
        <Header 
          titulo = "Administrador Pacientes Veterinaria"
        />
        <div className="row">
          <div className="col-md10 mx-auto">
            <NuevaCita 
              crearNuevaCita = { this.crearNuevaCita }
            />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas 
              citas = { this.state.citas }
              eliminarCita = { this.eliminarCita }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
