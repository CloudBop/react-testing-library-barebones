import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [btnColor, setBtnColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newBtnColor = btnColor==='red' ? 'blue' :'red';
  return (
    <div className="App">
      <button 
        onClick={()=> !disabled && setBtnColor(newBtnColor)} 
        style={{backgroundColor:btnColor}}
        disabled={disabled}
      >
        Change to {newBtnColor}
      </button>
      <input 
        onChange={(e)=>setDisabled(e.target.checked)} 
        type="checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        name="enable-button-checkbox"
        id="enable-button-checkbox"
      />
    </div>
  );
}

export default App;
