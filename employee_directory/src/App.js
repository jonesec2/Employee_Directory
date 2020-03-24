import React, { Component } from "react";
import EmployeeComponent from "./components/EmployeeComponent";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";


class App extends Component {

   state = {
      employees
   };

   // use conditional rendering to render a table based on the user's input
   // see activity 20/21

   // render forms for user to input desired input for table
   // see activity 17/18

   render() {
      return (
         <Wrapper>
            <Title>Employee Directory</Title>
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
         </Wrapper>
      )
   }
}


export default App;
