import React from "react";
// import EmployeeComponent from "./EmployeeComponent.js";
// import employees from "../employees.json";

// change to function
function Table(props) {

   console.log(props.employees)
   console.log(props.value)

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
            {props.handlePageChange}
         </tbody>
      </table>
   ]

}

export default Table;