import React from 'react'  
import ReactDOM from 'react-dom'  
//import EmpleadoList from './components/empleado-list'
import EmpleadoApp from './empleado-app'

/*
/*** Se cogen por Ajx con Ecmascript6 en fetch en empleado-app. Awesome! ****
let empleados = [  
  { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "1.jpg" },
  { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "2.jpg" },
  { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "3.jpg" },
  { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "4.jpg" },
  { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "5.jpg" },
  { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "6.jpg" },
  { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "7.jpg" },
  { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "8.jpg" },
  { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "9.jpg" },
]
*/

var MyComponent = React.createClass({
  render: function() {
    return <EmpleadoApp />;
  }
});

ReactDOM.render(<MyComponent />, document.getElementById('application'));
 