import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test("init button has correct background-color",()=>{
  // https://www.w3.org/TR/wai-aria/#role_definitions
  // https://github.com/testing-library/jest-dom
  render(<App/>);
  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', {name:"Change to blue"});
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});

  // ...click the button
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
  expect(colorButton.textContent).toBe('Change to red');
})
// test("button turns blue onclick",()=>{
//   render(<App/>);
//   const colorButton = screen.getByRole('button', {name:"Change to red"})
// })