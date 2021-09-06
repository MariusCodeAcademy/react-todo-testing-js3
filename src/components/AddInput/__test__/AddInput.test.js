import { screen, render, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

// tuscia fn vietoj () => {}
const mockFn = jest.fn();

describe('Input testing', () => {
  it('Should render input', () => {
    render(<AddInput setTodos={mockFn} todos={[]} />);
    const inputEl = screen.getByPlaceholderText(/Add a new task/);
    expect(inputEl).toBeInTheDocument();
  });
  // input works
  it('Should be able to enter in input', () => {
    // Arrange
    render(<AddInput setTodos={mockFn} todos={[]} />);
    const inputEl = screen.getByPlaceholderText(/Add a new task/);
    // Act
    // change(El, 'koks change')
    fireEvent.change(inputEl, { target: { value: 'Do sports on Sunday' } });
    // Assert
    expect(inputEl.value).toBe('Do sports on Sunday');
  });
});
