import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';


const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const btnElement = screen.getByRole("button", { name: /Add/i });

    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } })
        fireEvent.click(btnElement)
    });

}

describe("AddInput", () => {
    it('should render input element', async () => {
        render(<MockTodo />);
        addTask(["go shopping"]);
        const divElement = screen.getByText(/go shopping/i)
        expect(divElement).toBeInTheDocument();
    });

    it('should render input elements', async () => {
        render(<MockTodo />);
        addTask(["go shopping","sagar","need my flat"])
        const divElement = screen.getAllByTestId("task-container")
        expect(divElement.length).toBe(3);
    });

    it('task should not have completed class when initially rendered', async () => {
        render(<MockTodo />);
        addTask(["go shopping"])
        const divElement = screen.getByText("go shopping")
        expect(divElement).not.toHaveClass("todo-item-active");
    });

    it('task should have completed class when clicked', async () => {
        render(<MockTodo />);
        addTask(["go shopping"])
        const divElement = screen.getByText("go shopping")
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active");
    });

});