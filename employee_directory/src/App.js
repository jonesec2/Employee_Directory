import React, { Component } from "react";
import EmployeeComponent from "./pages/EmployeeComponent";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Table from "./pages/Table";
import employees from "./employees.json";
import InputForms from "./pages/InputForms";

//change to stateful
class App extends Component {

   constructor(props) {
      super(props);
      this.state = { employees, manageValue: "Select", firstValue: "Select" };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }


   handleSubmit(event) {
      event.preventDefault();
   }
   handleChange(event) {
      this.setState({ manageValue: event.target.value });
      this.setState({ firstValue: event.target.value});
   }


   handlePageChange() {
      if (this.state.manageValue === "No") {
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
      } else if (this.state.manageValue === "Yes") {
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
      // else if (this.state.firstValue === "A-I") {
      //    return this.state.employees.filter(employee => employee.firstName ).map(employee =>
      //       <EmployeeComponent
      //          id={employee.id}
      //          firstName={employee.firstName}
      //          lastName={employee.lastName}
      //          position={employee.position}
      //          contractor={employee.contractor}
      //          management={employee.management}
      //       />
      //    )
      // }
       else {
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
            manageValue = {this.state.manageValue}
            handleSubmit = {this.handleSubmit}
            handleChange = {this.handleChange}
            ></InputForms>
            <Table
               handlePageChange={this.handlePageChange()}
            ></Table>
         </Wrapper>
      )
   }
}


export default App;
