import React, { Component } from "react";
import EmployeeComponent from "./components/EmployeeComponent";
import employees from "./employees.json";

class App extends Component {

   state = {
      employees
   };


   render() {
      return (
         <EmployeeComponent
            id={employees[0].id}
            firstName={employees[0].firstName}
            lastName={employees[0].lastName}
            position={employees[0].position}
            contractor={employees[0].contractor}
            management={employees[0].management}
         />
      )
   }
}

export default App;
