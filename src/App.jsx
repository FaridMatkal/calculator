import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

function Calculator () {
  

  return (
    <div id="container">
      
      <input type="text" id="display" readOnly/>
      <input type="submit" value="AC" id="clear"/>
      <button id="menos1">
        <FontAwesomeIcon icon={faDeleteLeft} />
      </button>        
      <input type="submit" value="/" id="divide"/>
      <input type="submit" value="7" id="seven"/>
      <input type="submit" value="8" id="eight"/>
      <input type="submit" value="9" id="nine"/>
      <input type="submit" value="x" id="multiply"/>
      <input type="submit" value="4" id="four"/>
      <input type="submit" value="5" id="five"/>
      <input type="submit" value="6" id="six"/>
      <input type="submit" value="-" id="subtract"/>
      <input type="submit" value="1" id="one"/>
      <input type="submit" value="2" id="two"/>
      <input type="submit" value="3" id="three"/>
      <input type="submit" value="+" id="add"/>
      <input type="submit" value="0" id="zero"/>
      <input type="submit" value="." id="decimal"/>
      <input type="submit" value="=" id="equals"/>  
      
    </div>
  )
}

export default Calculator
