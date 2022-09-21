import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';


const mockedSetTodo = jest.fn();

describe("AddInput", () => {
    it('should render input element', async () => {
        render(<AddInput
            todos={[]}
            setTodos={mockedSetTodo}
        />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });


    it('should be able to type in input', async () => {
        render(<AddInput
            todos={[]}
            setTodos={mockedSetTodo}
        />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: "go shopping" } });
        expect(inputElement.value).toBe("go shopping");
    });

    it('should have empty input when add is clicked', async () => {
        render(<AddInput
            todos={[]}
            setTodos={mockedSetTodo}
        />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const btnelement = screen.getByRole('button', { name: /Add/i })
        fireEvent.change(inputElement, { target: { value: "go shopping" } });
        fireEvent.click(btnelement)
        expect(inputElement.value).toBe("");
    });
})