import React from 'react'  
import EmpleadoList from '../components/empleado-list'

class EmpleadoApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = { empleados: [] }
  }

  componentWillMount() {
    /* we use fieldbook to get data info */
    fetch('https://api.fieldbook.com/v1/5673ce826acfd703006d9726/sheet_1')
      .then((response) => {
        return response.json()
      })
      .then((empleados) => {
        this.setState({ empleados: empleados })
      })
  }

  render() {
    if (this.state.empleados.length > 0) {
      return (
        <div className="container-fluid">
          <EmpleadoList listado={this.state.empleados} />
        </div>
      )
    } else {
      return <p className="text-center">Cargando empleados...</p>
    }
  }

}

export default EmpleadoApp  
