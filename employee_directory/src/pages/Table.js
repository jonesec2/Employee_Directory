import React, { Component } from "react";
import EmployeeComponent from "../components/EmployeeComponent.js";
import employees from "../employees.json";


class Table extends Component {

   state = {
      employees
   };

   render() {
      return (
         <table className="table table-striped">
            <thead>
               <tr>
                  <th id="id" scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Position</th>
                  <th scope="col">Contractor</th>
                  <th scope="col">Management</th>
               </tr>
            </thead>
            <tbody>
               {this.state.employees.map(employee => (
                  <EmployeeComponent

                     id={employee.id}
                     firstName={employee.firstName}
                     lastName={employee.lastName}
                     position={employee.position}
                     contractor={employee.contractor}
                     management={employee.management}
                  />
               ))}
            </tbody>
         </table>
      )
   }
}

export default Table;