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
      manageValue: "Select",
      sort: {
         column: null,
         direction: 'desc'
      },
   };


   // These bindings are necessary to make `this` work in the callback
   // handleChange = this.handleChange.bind(this);
   // handleSubmit = this.handleSubmit.bind(this)
   onSort = (column) => (e) => {
      const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
      const sortedData = this.state.employees.sort((a, b) => {
         console.log(column)
         if (column === 'firstName') {
            const nameA = a.firstName.toUpperCase();
            const nameB = b.firstName.toUpperCase();
            if (nameA < nameB) {
               return -1;
            }
            if (nameA > nameB) {
               return 1;
            }
            return 0;
         } if (column === "lastName") {
            const nameA = a.lastName.toUpperCase();
            const nameB = b.lastName.toUpperCase();
            if (nameA < nameB) {
               return -1;
            }
            if (nameA > nameB) {
               return 1;
            }
            return 0;
         } else  {
            const nameA = a.position.toUpperCase();
            const nameB = b.position.toUpperCase();
            if (nameA < nameB) {
               return -1;
            }
            if (nameA > nameB) {
               return 1;
            }
            return 0;
         }
      });

      if (direction === 'desc') {
         sortedData.reverse();
      }

      this.setState({
         employees: sortedData,
         sort: {
            column,
            direction
         }
      });
   };

   onSortNumber = (column) => (e) => {
      const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
      const sortedData = this.state.employees.sort((a, b) => {

         if (column === "id") {
            const numA = a.id;
            const numbB = b.id;
            if (numA < numbB) {
               return -1;
            }
            if (numA > numbB) {
               return 1;
            } else {
               return 0;
            }
         } else if (column === "contractor") {
            const numA = a.contractor;
            const numbB = b.contractor;
            if (numA < numbB) {
               return -1;
            }
            if (numA > numbB) {
               return 1;
            } else {
               return 0;
            }
         } else {
            const numA = a.management;
            const numbB = b.management;
            if (numA < numbB) {
               return -1;
            }
            if (numA > numbB) {
               return 1;
            } else {
               return 0;
            }
         }
      });

      if (direction === 'desc') {
         sortedData.reverse();
      }

      this.setState({
         employees: sortedData,
         sort: {
            column,
            direction
         }
      });
   };


   setArrow = (column) => {
      let className = 'sort-direction';

      if (this.state.sort.column === column) {
         className += this.state.sort.direction === 'asc' ? ' asc' : ' desc';
      }

      console.log(className);

      return className;
   };

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
               onSort={this.onSort}
               setArrow={this.setArrow}
               onSortNumber={this.onSortNumber}
            ></Table>
         </Wrapper>
      )
   }
}


export default App;
