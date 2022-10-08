import { useState } from "react";


export default function Calc() {
  //state
  const [operatorClicked, setOperatorClicked] = useState(false); //for when any operator is clicked
  const [clickedTwice, setClickedTwice] = useState(0);
  const [secondValue, setSecondValue] = useState(0); // value after operator
  const [operator, setOperator] = useState(null); // useState for operator
  const [displayNum, setDisplayNum] = useState("0"); // the initial value/result

  //display numbers clicked by users in the display screen
  const handleDisplay = (e) => {
    if (operatorClicked === false) {
      if (displayNum === "0" && e.target.value !== ".") {
        setDisplayNum(e.target.value);
      } else if (displayNum === "0" && e.target.value === ".") {
        setDisplayNum((prev) => prev + e.target.value);
      } else if (displayNum.includes(".") && e.target.value === ".") {
        setDisplayNum((prev) => prev);
      } else {
        setDisplayNum((prev) => prev + e.target.value);
      }
    } else if (operatorClicked === true) {
      setDisplayNum(e.target.value);
      setOperatorClicked(false);
    }
  };   

  
  const handleOperator = (e) => {
    setOperatorClicked(true);
    setOperator(e.target.value);
    setSecondValue(displayNum);
    setClickedTwice(1);
    if (clickedTwice > 0) {
      setSecondValue(displayNum);
      handleCal();
      console.log(displayNum, secondValue, operatorClicked);
    }
  };

  const handleCal = () => {
    if (operator === "+") {
      setDisplayNum(Number(secondValue) + Number(displayNum));
      setSecondValue(displayNum);
    } else if (operator === "-") {
      setDisplayNum(Number(secondValue) - Number(displayNum));
    } else if (operator === "x") {
      setDisplayNum(Number(secondValue) * Number(displayNum));
    } else if (operator === "/") {
      setDisplayNum(Number(secondValue) / Number(displayNum));
    }
  };

    const handleClear = () => {
        setDisplayNum("0");
        setOperatorClicked(false);
        setSecondValue(0);
        setOperator(null);
    }
    return (
    <>
      <section className="screen-container">{displayNum}</section>

      <section className="buttons">
        <button value="7" onClick={(e) => handleDisplay(e)}>
          7
        </button>
        <button value="8" onClick={(e) => handleDisplay(e)}>
          8
        </button>
        <button value="9" onClick={(e) => handleDisplay(e)}>
          9
        </button>
        <button value="/" onClick={(e) => handleOperator(e)}>
          /
        </button>
        <button value="4" onClick={(e) => handleDisplay(e)}>
          4
        </button>
        <button value="5" onClick={(e) => handleDisplay(e)}>
          5
        </button>
        <button value="6" onClick={(e) => handleDisplay(e)}>
          6
        </button>
        <button value="x" onClick={(e) => handleOperator(e)}>
          x
        </button>
        <button value="1" onClick={(e) => handleDisplay(e)}>
          1
        </button>
        <button value="2" onClick={(e) => handleDisplay(e)}>
          2
        </button>
        <button value="3" onClick={(e) => handleDisplay(e)}>
          3
        </button>
        <button value="-" onClick={(e) => handleOperator(e)}>
          -
        </button>
        <button value="0" onClick={(e) => handleDisplay(e)}>
          0
        </button>
        <button value="." onClick={(e) => handleDisplay(e)}>
          .
        </button>
        <button className='clear' onClick={(e) => handleClear(e)}>C</button>
        <button value="+" onClick={(e) => handleOperator(e)}>
          +
        </button>  
      </section>
      
      <section className='equal'>
      <button className='eq-btn' value='=' onClick={(e) => handleOperator(e)}>=</button>
      </section>
    </>
  );
}
