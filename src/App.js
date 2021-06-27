import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [btnColor, setBtnColor] = useState('red');
  const newBtnColor = btnColor==='red' ? 'blue' :'red';
  return (
    <div className="App">
      <button onClick={()=>setBtnColor(newBtnColor)} style={{backgroundColor:btnColor}}>Change to {newBtnColor}</button>
      <input type="checkbox" name="" id="" />
    </div>
  );
}

export default App;
