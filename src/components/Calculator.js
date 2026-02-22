import React, { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState({
    silverrs: 0,
    goldsilver: 0,
    cash: 0,
    bankcash: 0,
    investment: 0,
    property: 0,
    loan: 0,
  });

  function handleInput(e) {
    const numberv = parseFloat(e.target.value);
    setValue({ ...value, [e.target.name]: numberv || 0 });
  }

  function scrollShut(e) {
    e.target.blur();
  }

  // calculate net worth
  const netAmount =
    value.goldsilver +
    value.cash +
    value.bankcash +
    value.investment +
    value.property -
    value.loan;

  const netvalue = netAmount.toLocaleString("en-IN");

  // calculate zakat
  const silverMarketValue = 612.36 * value.silverrs;
  const zakat =
    netAmount > silverMarketValue
      ? (netAmount * 0.025).toLocaleString("en-IN")
      : 0;

  return (
    <div className="calculator">
      <div className="value-inputs">
        <h4>Input today's silver rate per grams :</h4>
        <input
          type="number"
          name="silverrs"
          placeholder="Rs."
          onWheel={scrollShut}
          onChange={handleInput}
        />
      </div>

      <h4>Possessions (Money, Goods & Property)</h4>

      <div className="value-inputs">
        <p>Value of Gold & Silver you have :</p>
        <input
          type="number"
          name="goldsilver"
          placeholder="Rs."
          onWheel={scrollShut}
          onChange={handleInput}
        />
      </div>

      <div className="value-inputs">
        <p>Cash at Home :</p>
        <input
          type="number"
          name="cash"
          placeholder="Rs."
          onWheel={scrollShut}
          onChange={handleInput}
        />
      </div>

      <div className="value-inputs">
        <p>Cash at Bank Account :</p>
        <input
          type="number"
          name="bankcash"
          placeholder="Rs."
          onWheel={scrollShut}
          onChange={handleInput}
        />
      </div>

      <div className="value-inputs">
        <p>Any Investments & Share Value :</p>
        <input
          type="number"
          name="investment"
          placeholder="Rs."
          onWheel={scrollShut}
          onChange={handleInput}
        />
      </div>

      <div className="value-inputs">
        <p>Value of goods & properties for business :</p>
        <input
          type="number"
          name="property"
          placeholder="Rs."
          onWheel={scrollShut}
          onChange={handleInput}
        />
      </div>

      <h4>Minus Liabilities (Deductions)</h4>

      <div className="value-inputs">
        <p>Total repayable Loan/Debts you have :(One Lunar year)</p>
        <input
          type="number"
          name="loan"
          placeholder="Rs."
          onWheel={scrollShut}
          onChange={handleInput}
        />
      </div>

      <div className="final-amount">
        <div>
          <h3>Total Net Worth :</h3>
          <p className="netvalue">Rs.{netvalue}</p>
        </div>

        <div>
          <h2>Zakat Payable :</h2>
          <p className="zakat">Rs.{zakat}</p>
        </div>
      </div>

      <p className="disclaimer">
        Disclaimer: If you are unsure about your Zakat calculation or the details
        you entered, please consult your local Imam or Mufti.
      </p>
    </div>
  );
};

export default Calculator;