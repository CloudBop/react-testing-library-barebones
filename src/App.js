import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [btnColor, setBtnColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);
  const newBtnColor = btnColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  return (
    <div className="App">
      <button
        onClick={() => !disabled && setBtnColor(newBtnColor)}
        style={{ backgroundColor: disabled ? 'gray' : btnColor }}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newBtnColor)}
      </button>
      <input
        onChange={(e) => setDisabled(e.target.checked)}
        type="checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        name="disable-button-checkbox"
        id="disable-button-checkbox"
      />
      <label htmlFor="disable-button-checkbox">Disable Button</label>
    </div>
  );
}

export default App;
