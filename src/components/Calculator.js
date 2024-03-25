import React from "react";
import { useState,useEffect } from "react";


const Calculator = () =>{
  // main input value usestate
  const [value, setValue] = useState({
    goldsilver: 0,
    cash: 0,
    bankcash: 0,
    investment: 0,
    property: 0,
    loan: 0,
  });

  const [zakat, setZakat] = useState(0);
  const [netvalue, setNetValue] = useState(0);

  // function to call when value usestate is updated
  useEffect(() => {
    calculatezakat();
  }, [value]);

  // function to call when netvalue is updated
  useEffect(() => {
    changeZakat();
  }, [netvalue]);

  function handleInput(e) {
    const numberv = parseFloat(e.target.value);
    setValue({ ...value, [e.target.name]: numberv || 0 });
  }

  //this function help us the stop the input value getting manipulated by scroll of mouse when input is on focus
  function scrollShut(event) {
    event.target.blur();
  }

  function changeZakat() {
    let zakc;
    if (typeof netvalue === "string") {
      zakc = parseFloat(netvalue.replace(/,/g, ""));
    } else {
      zakc = netvalue;
    }

    if (zakc > 47641.6) {
      let finalzakat = zakc * 0.025;
      let testingh = finalzakat;
      let zakc2 = finalzakat.toLocaleString("en-IN");
      setZakat(zakc2);
    } else {
      setZakat(0);
    }
  }

  function calculatezakat() {
    let additionv = value.goldsilver + value.cash + value.bankcash +
                    value.investment + value.property - value.loan;
    let netc = additionv.toLocaleString("en-IN");
    setNetValue(netc);
  }

  return (
    <div className="calculator">
      
      <h4>Posessions (Money,Goods & Property)</h4>
      <div className="value-inputs">
        <p>Value of Gold & Silver you have : </p>
        <input
          onWheel={scrollShut}
          name="goldsilver"
          type="number"
          placeholder="Rs."
          // value={value.goldsilver}
          onChange={handleInput}
        />
      </div>

      <div className="value-inputs">
        <p>Cash at Home: </p>
        <input
          type="number"
          name="cash"
          onWheel={scrollShut}
          placeholder="Rs."
          // value={value.cash}
          onChange={handleInput}
        />
      </div>

      <div className="value-inputs">
        <p>Cash at Bank Account : </p>
        <input
          type="number"
          onWheel={scrollShut}
          placeholder="Rs."
          name="bankcash"
          // value={value.bankcash}
          onChange={handleInput}
        />
      </div>

      <div className="value-inputs">
        <p>Any Investments & Share Value : </p>
        <input
          type="number"
          onWheel={scrollShut}
          placeholder="Rs."
          name="investment"
          // value={value.investment}
          onChange={handleInput}
        />
      </div>

      <div className="value-inputs">
        <p>Value of goods & properties for business :</p>
        <input
          type="number"
          onWheel={scrollShut}
          placeholder="Rs."
          name="property"
          // value={value.property}
          onChange={handleInput}
        />
      </div>

      <h4>Minus Liabilities (Deductions)</h4>
      <div className="value-inputs">
        <p>Total repayable Loan/Debts you have :</p>
        <input
          type="number"
          onWheel={scrollShut}
          name="loan"
          placeholder="Rs."
          onChange={handleInput}
        />
      </div>

      <div className="final-amount">
        <div>
          <h3>Total Net Worth :</h3>
          <p className="netvalue">Rs.{netvalue}</p>
        </div>

        <div>
          <h2>Zakat Payable:</h2>
          <p className="zakat">Rs.{zakat}</p>
        </div>
      </div>

    </div>
  );
}

export default Calculator