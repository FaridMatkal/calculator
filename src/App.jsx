import { useState, useEffect } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { evaluate } from 'mathjs';


function Calculator () {
    const [displayValue, setDisplayValue] = useState('');
    

    // Functions numbers | Event click and keyPressed
    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, []); 


    useEffect(() => {
      const handleEnter = (event) => {
          if (event.key === 'Enter') {
              calculatorNumber();
          }
      };
  
      document.addEventListener('keydown', handleEnter);
  
      return () => {
          document.removeEventListener('keydown', handleEnter);
      };
  }, [displayValue]);

    const handleKeyDown = (event) => {
        const key = event.key;

        if (/[0-9+\-\/.*=]/.test(key)) {
          numberClick(key);
        } else if ( key === 'Enter') {
          
        } else if ( key === 'Delete') {
          clearNumber();
        } else if ( key === 'Backspace') {
          deleteNumber();
        }
    };

    const numberClick = (number) => {
      setDisplayValue(prevValue => prevValue + number)
   }

    const deleteNumber = () => {
      setDisplayValue(prevValue => prevValue.slice(0, -1));
    }

    const clearNumber = () => {
      setDisplayValue('');
    }

    const calculatorNumber = () => {
      const result = evaluate(displayValue);
      setDisplayValue(result);
    } 


  return (
    <div id="container">
      
      <input type="text" id="display" value={displayValue} readOnly/>
      <input type="submit" value="AC" id="clear" onClick={clearNumber}/>
      <button id="menos1" onClick={deleteNumber}>
        <FontAwesomeIcon icon={faDeleteLeft} />
      </button>        
      <input type="submit" value="/" id="divide" onClick={() => numberClick('/')}/>
      <input type="submit" value="7" onClick={() => numberClick('7')} id="seven"/>
      <input type="submit" value="8" onClick={() => numberClick('8')} id="eight" />
      <input type="submit" value="9" onClick={() => numberClick('9')} id="nine" />
      <input type="submit" value="x" onClick={() => numberClick('*')} id="multiply"/>
      <input type="submit" value="4" onClick={() => numberClick('4')} id="four"/>
      <input type="submit" value="5" onClick={() => numberClick('5')} id="five"/>
      <input type="submit" value="6" onClick={() => numberClick('6')} id="six"/>
      <input type="submit" value="-" onClick={() => numberClick('-')} id="subtract"/>
      <input type="submit" value="1" onClick={() => numberClick('1')} id="one"/>
      <input type="submit" value="2" onClick={() => numberClick('2')} id="two"/>
      <input type="submit" value="3" onClick={() => numberClick('3')} id="three"/>
      <input type="submit" value="+" onClick={() => numberClick('+')} id="add"/>
      <input type="submit" value="0" onClick={() => numberClick('0')} id="zero"/>
      <input type="submit" value="." onClick={() => numberClick('.')} id="decimal"/>
      <input type="submit" value="=" onClick={calculatorNumber} id="equals"/>  
      
    </div>
  )
}


export default Calculator
