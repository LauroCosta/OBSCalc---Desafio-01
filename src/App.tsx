import "./styles.css";
import { FiPlus, FiDivide, FiX, FiMinus } from "react-icons/fi";
import { AiOutlineCalculator } from 'react-icons/ai'
import { ChangeEvent, useEffect, useState } from "react";

export default function App() {
  const [operator, setOperator] = useState("sum");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");
  
  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    const { value, id } = (event.target);
    if (id === "input1"){
      setInput1(value);
    }else{
      setInput2(value);
    }
  }

  useEffect(() => {
   
    if (input1 !== "" && input2!== "") {
      switch (operator) {
        case "sum":
          setResult((Number(input1) + Number(input2)).toString());
          break;
        case "subtraction":
          setResult((Number(input1) - Number(input2)).toString());
          break;
        case "multiplication":
          setResult((Number(input1) * Number(input2)).toString());
          break;
        case "division":
          if(input2 === "0"){
            setResult("Error")
          }else{
            setResult((Number(input1) / Number(input2)).toString());
          }
          break;
      }
    }else{
      setResult("");
    }

  }, [operator, input1, input2]);

  return (
    <main>
      
      <h1><AiOutlineCalculator size={45}/>{process.env.REACT_APP_TITLE}</h1>
      <div className="inputsNumbers">
        <input 
          id="input1"
          type="number" 
          onChange={handleInputChange}
        />
        
        <input 
          id="input2"
          type="number" 
          onChange={handleInputChange}
        />
      </div>

      <div className="operators">
        <button
          className={operator === 'sum' ? 'active' : ''}
          onClick={() => {setOperator('sum')}}
        >
          <FiPlus size={32} color={"#747474"} /></button>
        <button 
          className={operator === 'subtraction' ? 'active' : ''}
          onClick={() => {setOperator('subtraction')}}
        >
          <FiMinus size={32} color={"#747474"} />
        </button>
        <button
          className={operator === 'multiplication' ? 'active' : ''}
          onClick={() => {setOperator('multiplication')}}
        >
          <FiX size={32} color={"#747474"} />
        </button>
        <button
          className={operator === 'division' ? 'active' : ''}
          onClick={() => {setOperator('division')}}
        >
          <FiDivide size={32} color={"#747474"}/>
        </button>
      </div>

      <input 
        className="result" 
        type="text" 
        value={result} 
        disabled
      />
    </main>
  );
}
