import React, { Component } from "react";
import EmployeeComponent from "./EmployeeComponent.js";
import employees from "../employees.json";

// change to function
function Table(props) {

   // state = {
   //    employees
   //    ,
   //    manageFilter: ""
   // };


   handlePageChange = (props) => {
      if (prop.manageFilter === "") {
         return props.employees.map(employee => (
            <EmployeeComponent
               id={employee.id}
               firstName={employee.firstName}
               lastName={employee.lastName}
               position={employee.position}
               contractor={employee.contractor}
               management={employee.management}
            />
         ))
      } else if (this.state.manageFilter === "Yes") {
         return this.state.employees.filter(employee => employee.management === 1).map(employee =>
            <EmployeeComponent
               id={employee.id}
               firstName={employee.firstName}
               lastName={employee.lastName}
               position={employee.position}
               contractor={employee.contractor}
               management={employee.management}
            />
         )
      }
   }
   // handleFilter = option => {
   //    if (this.state.manageFilter === "Yes") {
   //       return this.state.employees.filter(employee => (
   //          employee.management === 1
   //       ))
   //    }
   // }


   {
      return [
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
               {handlePageChange()}
            </tbody>
         </table>
      ]
   }
}

export default Table;