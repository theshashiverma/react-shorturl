import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store'
import App from './App';
import Input from '../src/components/UI/Input/Input';
import Button from '../src/components/UI/Button/Button';

test('renders app', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByTestId("app");
  expect(linkElement).toBeInTheDocument();
});

test('renders input field', () => {
  render(<Input />);
  const linkElement = screen.getByTestId("input");
  expect(linkElement).toBeInTheDocument();
});

test('renders of button', () => {
  render(<Button />);
  const linkElement = screen.getByTestId("button");
  expect(linkElement).toBeInTheDocument();
});

test('input field should not empty', () => {
  render(<Input />);
  
  const linkElement = screen.getByTestId("input");
  expect(linkElement).not.toBeEmptyDOMElement();
  // expect(screen.getByLabelText("name")).not.toBeEmpty()
});

