import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodo = ({numberOfIncompleteTasks}) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  )

}

it('should render same text passed into title', async () => {
  render(<MockTodo numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

// it('should render task', async () => {
//   render(<MockTodo numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toBeInTheDocument();
// });

// it('should render task is visible', async () => {
//   render(<MockTodo numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toBeVisible();
// });

test('should render same text passed title', async () => {
  render(<MockTodo numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toContainHTML("p");
});