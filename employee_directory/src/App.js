import React, { Component } from "react";
import EmployeeComponent from "./pages/EmployeeComponent";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Table from "./pages/Table";
import employees from "./employees.json";
import InputForms from "./pages/InputForms";


class App extends Component {

   state = {
      employees,
      manageValue: "Select"
   }

   // These bindings are necessary to make `this` work in the callback
   // handleChange = this.handleChange.bind(this);
   // handleSubmit = this.handleSubmit.bind(this)

   // using => removes the need to bind this to the callback
   handleSubmit = (event) => {
      event.preventDefault();
   }
   handleChange = (event) => {
      this.setState({ manageValue: event.target.value });
   }


   handleTableValues() {
      if (this.state.manageValue === "Management") {
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
      } else if (this.state.manageValue === "Contractors") {
         return this.state.employees.filter(employee => employee.management === 0).map(employee =>
            <EmployeeComponent
               id={employee.id}
               firstName={employee.firstName}
               lastName={employee.lastName}
               position={employee.position}
               contractor={employee.contractor}
               management={employee.management}
            />
         )
      } else if (this.state.manageValue === "Both") {
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
      } else {
         return this.state.employees.map(employee =>
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

   render() {
      return (
         <Wrapper>
            <Title>Employee Directory</Title>
            <InputForms
               manageValue={this.state.manageValue}
               handleSubmit={this.handleSubmit}
               handleChange={this.handleChange}
            ></InputForms>
            <Table
               handleTableValues={this.handleTableValues()}
            ></Table>
         </Wrapper>
      )
   }
}


export default App;
