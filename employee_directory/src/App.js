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
      this.state = { employees, value: "" };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }


   handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
   }
   handleChange(event) {
      this.setState({ value: event.target.value });
   }


   handlePageChange() {
      if (this.state.value === "No") {
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
      } else if (this.state.value === "Yes") {
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

   // use conditional rendering to render a table based on the user's input
   // see activity 20/21

   // add function that will update manageFilter to pass props to InputForms
   // use onChange keyword
   // onChange = () => {
   //    manageFilter: "Yes"
   // }

   // render forms for user to input desired input for table
   // see activity 17/18

   render() {
      return (
         <Wrapper>
            <Title>Employee Directory</Title>
            {/* <form onSubmit={this.handleSubmit}>
               <label>
                  Pick your favorite flavor:
                  <select value={this.state.value} onChange={this.handleChange}>
                     <option value="grapefruit">Grapefruit</option>
                     <option value="lime">Lime</option>
                     <option value="coconut">Coconut</option>
                     <option value="mango">Mango</option>
                  </select>
               </label>
               <input type="submit" value="Submit" />
            </form> */}
            <InputForms
            // onChange={this.onChange}
            value = {this.state.value}
            handleSubmit = {this.handleSubmit}
            handleChange = {this.handleChange}
            >

            </InputForms>
            <Table
               employees={this.state.employees}
               value={this.state.manageFilter}
               handlePageChange={this.handlePageChange()}
            >
            </Table>
         </Wrapper>
      )
   }
}


export default App;
