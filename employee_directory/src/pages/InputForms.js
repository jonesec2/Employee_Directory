import React from "react";

function InputForms(props) {

   return (
      <form onSubmit={props.handleSubmit} className="mx-auto">
         <div className="form-group row">
            <label className="col-sm-6 col-form-label" htmlFor="exampleFormControlSelect1">First Name</label>
            <div className="col-sm-6">
               <select value={props.firstValue} className="form-control" onChange={props.handleChange} id="exampleFormControlSelect1" placeholder="-- Select --">
                  <option key={"Select"} firstValue="Select" selected disabled>Select</option>
                  <option key={"A-I"} value="A-I">A-I</option>
                  <option key={"J-R"} value="J-R">J-R</option>
                  <option key={"S-Z"} value="">S-Z</option>
               </select>
            </div>
         </div>
         <div className="form-group row">
            <label className="col-sm-6 col-form-label" htmlFor="exampleFormControlSelect1">Management</label>
            <div className="col-sm-6">
               <select value={props.manageValue} className="form-control" onChange={props.handleChange} id="exampleFormControlSelect1" placeholder="-- Select --">
                  <option key={"Select"} manageValue=" Select " selected disabled>Select</option>
                  <option key={"Yes"} value="Yes">Yes</option>
                  <option key={"No"} value="No">No</option>
                  <option key={"N/A"} value="">N/A</option>
               </select>
            </div>
         </div>
      </form>
   );
}

export default InputForms;

