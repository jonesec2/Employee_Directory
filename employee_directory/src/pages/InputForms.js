import React from "react";

function InputForms(props) {

   return (
      <form onSubmit={props.handleSubmit} className="mx-auto">
         <div className="form-group row">
            <label className="col-sm-6 col-form-label" htmlFor="exampleFormControlSelect1">Management</label>
            <div className="col-sm-6">
               <select value={props.value} className="form-control" onChange={props.handleChange} id="exampleFormControlSelect1" placeholder="-- Select --">
                  <option key={"Select"} value=" Select " selected disabled>Select</option>
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

