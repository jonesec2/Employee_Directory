import React, { Component } from "react";
import EmployeeComponent from "./components/EmployeeComponent";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Table from "./pages/Table";
import employees from "./employees.json";
import InputForms from "./pages/InputForms";

//change to stateful
class App extends Component {

   state = {
      employees,
      manageFilter: ""
   };

   // use conditional rendering to render a table based on the user's input
   // see activity 20/21

   // add function that will update manageFilter to pass props to InputForms
   onChange = () => {
      manageFilter: "Yes"
   }

   // render forms for user to input desired input for table
   // see activity 17/18

   render() {
      return (
         <Wrapper>
            <Title>Employee Directory</Title>
            <InputForms onChange={this.onChange}></InputForms>
            <Table employees={this.state.employees} manageFilter={this.state.manageFilter}></Table>
         </Wrapper>
      )
   }
}


export default App;
