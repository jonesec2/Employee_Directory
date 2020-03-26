import React  from "react";
// import EmployeeComponent from "./components/EmployeeComponent";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Table from "./pages/Table";
// import employees from "./employees.json";
import InputForms from "./pages/InputForms";


function App() {

   // state = {
   //    employees
   // };

   // use conditional rendering to render a table based on the user's input
   // see activity 20/21

   // render forms for user to input desired input for table
   // see activity 17/18


   return (
      <Wrapper>
         <Title>Employee Directory</Title>
         <InputForms></InputForms>
         <Table></Table>
      </Wrapper>
   )
}


export default App;
