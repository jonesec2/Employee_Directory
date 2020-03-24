import React, { Component } from "react";
import EmployeeComponent from "./components/EmployeeComponent";
import employees from "./employees.json";

class App extends Component {

   state = {
      employees
   };


   render() {
      return (
         this.state.employees.map(employee => (
            <EmployeeComponent
               id={employee.id}
               firstName={employee.firstName}
               lastName={employee.lastName}
               position={employee.position}
               contractor={employee.contractor}
               management={employee.management}
            />
         ))
      )
   }
}


export default App;
