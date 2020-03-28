import React from "react";

function EmployeeComponent(props) {
   return (
      <tr>
         <th scope="row">{props.id}</th>
         <td key={props.firstName.toString()}>{props.firstName}</td>
         <td key={props.lastName.toString()}>{props.lastName}</td>
         <td key={props.position.toString()}>{props.position}</td>
         <td key={props.contractor.toString()}>{props.contractor}</td>
         <td key={props.management.toString()}>{props.management}</td>
      </tr>
   );
}

export default EmployeeComponent;
