import React from "react";
import Calculator from "./Calculator";

const FormInputs = () =>{

    return (
      <div className="forminputs">
        <div className="criteria">
          <h3>Zakat Eligible Criteria </h3>

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
        <p>
          <h4>Deductions</h4>Only debts and necessary expenses payable within the current lunar year can be deducted from your Zakatable wealth.For eg. If you have a 25-year home loan with an EMI of ₹20,000/month, you may deduct ₹2,40,000 (12 months × ₹20,000), not the full loan amount.
        </p>
        <Calculator/>
      </div>
    );
}
export default FormInputs