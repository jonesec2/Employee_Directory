import React from "react";

function InputForms(props) {

   return (
      <form onSubmit={props.handleSubmit} className="mx-auto">
         <div className="form-group row">
            <label className="col-sm-6 col-form-label" htmlFor="exampleFormControlSelect1">Management?</label>
            <div className="col-sm-6">
               <select value={props.manageValue} className="form-control" onChange={props.handleChange} id="exampleFormControlSelect1" placeholder="-- Select --">
                  <option key={"Select"} manageValue=" Select " selected disabled>Select</option>
                  <option key={"Manage"} value="Management">Management</option>
                  <option key={"Contract"} value="Contractors">Contractor</option>
                  <option key={"All"} value="">All</option>
               </select>
            </div>
         </div>
      </form>
   );
}

export default InputForms;

