import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const CurrencyInfo = useCurrencyInfo(from);

  const options = Object.keys(CurrencyInfo);

  console.log(options);

  // Swap functionality
  const swap = () => {
    setFrom(to);
    setTo(from);
    // swapping of values
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo[to]);
    console.log(CurrencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${"https://assets-global.website-files.com/5f3b79a755e074d80d510eb6/5fae5493e7b24d7df25331dd_main.jpg"}')`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-400 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          className=""
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1  border-red-500">
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              currencyOptions={options}
              selectCurrency={from}
              onCurrencyChange={(currency) => setFrom(currency)}
            />
          </div>

          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  border-white rounded-md bg-green-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              swap
            </button>
          </div>

          <div className="w-full mt-1 mb-4  border-red-500">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
