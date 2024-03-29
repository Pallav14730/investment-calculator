import { useState } from "react";
import Header from "./Components/Header"
import Results from "./Components/Results"
import UserInput from "./Components/UserInput"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment : 5000,
  annualInvestment : 60000,
  expectedReturn : 6,
  duration : 10,
});

const inputIsValid = userInput.duration >= 1;
function handleChange(inputIdentifier, newValue){
  setUserInput(prevInputValue => {
    return{
      ...prevInputValue,
      [inputIdentifier] : +newValue,
    }
  })
}

  return (
    <>   
    <Header />
   <UserInput  userInput={userInput} onChange={handleChange} />
   {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
   {inputIsValid && <Results  input={userInput} /> }
   </>

  )
}

export default App
 