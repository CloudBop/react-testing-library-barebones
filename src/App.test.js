import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test("init button has correct background-color", () => {
  // https://www.w3.org/TR/wai-aria/#role_definitions
  // https://github.com/testing-library/jest-dom
  render(<App />);
  // find an element with a role of button and text of 'Change to Midnight'
  const colorButton = screen.getByRole('button', { name: "Change to Midnight Blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  // ...click the button
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
})

test("button+checkbox is default initialised", () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: "Change to Midnight Blue" });
  expect(colorButton).toBeEnabled();
  const enableCheckbox = screen.getByRole('checkbox');
  expect(enableCheckbox).not.toBeChecked();
})

test('checkbox should stop button from changing color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: "Change to Midnight Blue" });
  expect(colorButton).toBeEnabled();
  const enableCheckbox = screen.getByRole('checkbox',
    // where name === label.innerText
    { name: "Disable Button" });
  expect(enableCheckbox).not.toBeChecked();
  // disable 
  fireEvent.click(enableCheckbox);
  expect(enableCheckbox).toBeChecked();
  expect(colorButton).toBeDisabled();
  // test if is disabled
  fireEvent.click(colorButton);
  expect(colorButton).toHaveTextContent('Change to Midnight Blue');
  // re-enable
  fireEvent.click(enableCheckbox);
  expect(enableCheckbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
  // test if is disabled
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
})

test("disabled button has grey background", () => {
  render(<App />);
  const cb = screen.getByRole('checkbox', { name: 'Disable Button' });
  const colorBtn = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  // disable button
  fireEvent.click(cb);
  expect(colorBtn).toHaveStyle('background-color: gray')
  // enable button
  fireEvent.click(cb);
  expect(colorBtn).toHaveStyle('background-color: MediumVioletRed')
})

test("disabled button has grey background, returns to blue", () => {
  render(<App />);
  const cb = screen.getByRole('checkbox', { name: 'Disable Button' });
  const colorBtn = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  // change to Midnight
  fireEvent.click(colorBtn);

  // disable button
  fireEvent.click(cb);
  expect(colorBtn).toHaveStyle('background-color: gray')
  // enable button
  fireEvent.click(cb);
  expect(colorBtn).toHaveStyle('background-color: MidnightBlue')
})

describe('spaces before camel-cse capital letters', () => {
  test('no inner capitals', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  })
  test('one inner capitals', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  })
  test('two inner capitals', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
})
// test("button turns blue onclick",()=>{
//   render(<App/>);
//   const colorButton = screen.getByRole('button', {name:"Change to red"})
// })