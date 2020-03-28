import React from "react";


// change to function
function Table(props) {
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
            {/* {props.handleFirstChange} */}
         </tbody>
      </table>
   ]
}

export default Table;