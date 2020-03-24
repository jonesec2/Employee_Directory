import React from "react";

// function EmployeeComponent(props) {
//    return (
//       <div className="card">
//          <h1>Employee: {props.id}</h1>
//          <h3>Name: {props.firstName} {props.lastName} </h3>
//          <h5>Stats</h5>
//          <ul>
//             <li>Position: {props.position}</li>
//             <li>Contractor: {props.contractor}</li>
//             <li>Management: {props.management}</li>
//          </ul>
//       </div>
//    );
// }

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
