import React from "react";

function EmployeeComponent(props) {
  return (
    <div className="card">
      <h1>Employee: {props.id}</h1>
      <h3>Name: {props.firstName} {props.lastName} </h3>
      <h5>Stats</h5>
      <ul>
        <li>Position: {props.position}</li>
        <li>Contractor: {props.contractor}</li>
        <li>Management: {props.management}</li>
      </ul>
    </div>
  );
}

export default EmployeeComponent;
