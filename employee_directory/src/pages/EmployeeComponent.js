import React from "react";

function EmployeeComponent(props) {
   return (
      <tr>
         <th scope="row">{props.id}</th>
         <td>{props.firstName}</td>
         <td>{props.lastName}</td>
         <td>{props.position}</td>
         <td>{props.contractor}</td>
         <td>{props.management}</td>
      </tr>
   );
}

export default EmployeeComponent;
