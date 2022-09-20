import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("username");
  expect(linkElement).toBeInTheDocument();
});

test('query methods', () => {
  render(<App />);
  // const linkElement = screen.queryByText(/learn react/i);
  // const linkElement = screen.getByLabelText("username");
  const linkElement = screen.queryByPlaceholderText("user");

  expect(linkElement).toBeInTheDocument();
});

test('find methods',async () => {
  render(<App />);
  const linkElement = await screen.findByText("username");
  expect(linkElement).toBeInTheDocument();
});


test('Role ', () => {
  render(<App />);
  const linkElement =  screen.queryByRole("button",{name:'add'});
  expect(linkElement).toBeInTheDocument();
});


test('testid', () => {
  render(<App />);
  const linkElement =  screen.queryByTestId("myidd");
  expect(linkElement).toBeInTheDocument();
});