import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  onCurrencyChange,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-gray-50 p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-full border border-t border-r border-b border-l bg-gray-400">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 border border-t border-r border-b border-l"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className=" w-1/2 flex flex-wrap justify-end text-right border border-t border-r border-b border-l">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>

        <select
          className="rounded-lg px-1 py-1 bg-gray-50 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((Currency) => (
            <option key={Currency} value={Currency}>
              {Currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
