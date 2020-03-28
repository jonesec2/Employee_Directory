import React from "react";


// change to function
function Table(props) {
   return [
      <table className="table table-striped">
         <thead>
            <tr>
               <th onClick={() => {props.onSortNumber('id')}} id="id" scope="col">
                  #
                  <span className={props.setArrow('id')}></span>
               </th>
               <th onClick={() => {props.onSort('firstName')}} scope="col">
                  First
                  <span className={props.setArrow('firstName')}></span>
               </th>
               <th onClick={() => {props.onSort('lastName')}} scope="col">
                  Last
                  <span className={props.setArrow('lastName')}></span>
               </th>
               <th scope="col">Position</th>
               <th scope="col">Contractor</th>
               <th scope="col">Management</th>
            </tr>
         </thead>
         <tbody>
            {props.handleTableValues}
         </tbody>
      </table>
   ]
}

export default Table;