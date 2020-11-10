import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store'
import App from './App';
import Input from '../src/components/UI/Input/Input';
import Button from '../src/components/UI/Button/Button';

// Checking render of the App component
test('renders app', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByTestId("app");
  expect(linkElement).toBeInTheDocument();
});

// Checking render of the Input Field component
test('renders input field', () => {
  render(<Input />);
  const linkElement = screen.getByTestId("input");
  expect(linkElement).toBeInTheDocument();
});

// Checking render of the Button component
test('renders of button', () => {
  render(<Button />);
  const linkElement = screen.getByTestId("button");
  expect(linkElement).toBeInTheDocument();
});

// Checking Input field should not be empty
test('input field should not empty', () => {
  render(<Input />);
  
  const linkElement = screen.getByTestId("input");
  expect(linkElement).not.toBeEmptyDOMElement();
  // expect(screen.getByLabelText("name")).not.toBeEmpty()
});

