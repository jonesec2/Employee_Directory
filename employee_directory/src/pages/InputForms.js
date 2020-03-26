import React from "react";

function InputForms() {

   return (
      <form className="mx-auto">
         <div className="form-group row">
            <label className="col-sm-6 col-form-label" htmlFor="exampleFormControlSelect1">Management</label>
            <div className="col-sm-6">
               <select className="form-control" id="exampleFormControlSelect1" placeholder="-- Select --">
                  <option key={"Select"} defaultValue=" Select " selected disabled> Select </option>
                  <option key={"Yes"}>Yes</option>
                  <option key={"No"}>No</option>
                  <option key={"N/A"}>N/A</option>
               </select>
            </div>
         </div>
      </form>
   );
}

export default InputForms;

