import { render, screen } from '@testing-library/react';
import App from './App';

test("init button has correct background-color",()=>{
  // https://www.w3.org/TR/wai-aria/#role_definitions
  // https://github.com/testing-library/jest-dom
  render(<App/>);
  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', {name:"Change to blue"});
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
})
