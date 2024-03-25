import React from "react";
import Calculator from "./Calculator";

const FormInputs = () =>{

    return (
      <div className="forminputs">
        <div className="criteria">
          <h3>Zakat Eligible Criteria <span>(25th March 2024)</span></h3>
          <p>Value as per Gold : ₹ 5,70,719.52 </p>
          <p>Value as per Silver :₹ 47,641.6</p>
          <p>
            It is advise donors to considered silver value (which is almost
            always a lower threshold to gold) because this allows for a greater
            amount to be eligible for Zakat, which means more help for deserving
            Zakat recipients.
          </p>
        </div>
        <p>
          Note: 1 Tola = 11.6638 grams 
        </p>
        <Calculator/>
      </div>
    );
}
export default FormInputs