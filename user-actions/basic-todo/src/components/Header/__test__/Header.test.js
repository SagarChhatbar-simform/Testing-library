import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed into title',async () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByRole("heading",{name:'My Header'});
    expect(headingElement).toBeInTheDocument();
  });

  it('should render same text passed',async () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
  });

  it('should render same text passed into title prop', async () => {
    render(<Header title="My Header"/>);
    const headingElement = await screen.findByText(/My Header/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('should render same text passed into', async () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.queryByText(/dog/i);
    expect(headingElement).not.toBeInTheDocument();
  });

  it('should render same text into title',async () => {
    render(<Header title="My Header"/>);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(1);
  });