import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const investmentHandler = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <main>
        <UserInput
          onSelectInvestment={investmentHandler}
          userInput={userInput}
        />
        {inputIsValid ? (
          <ResultTable investment={userInput} />
        ) : (
          <p className="center">Please enter a duration greater than 0</p>
        )}
      </main>
    </>
  );
}

export default App;
