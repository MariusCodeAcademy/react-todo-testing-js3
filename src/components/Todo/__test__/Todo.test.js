import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

function addToTodo(todoArr) {
  // ivedam reiksme, paspaudziam mygtuka
  // cikle
}

it('Should add single todo to a list', () => {
  render(<MockTodo />);
  // gaunam input,
  const inputEl = screen.getByPlaceholderText(/Add a new task/);
  // ivedam reiksme
  fireEvent.change(inputEl, { target: { value: 'Do sports on Sunday' } });
  // gauti mygtuka
  const btnEl = screen.getByRole('button', { name: /add/i });
  // paspaudziam mygtuka
  fireEvent.click(btnEl);
  const todoAddedEl = screen.getByText('Do sports on Sunday');
  // expektinam rasti ivesta reiksme todo liste
  // Assert
  expect(todoAddedEl).toBeInTheDocument();
  expect(todoAddedEl).toHaveClass('todo-item');
});

it('Should add multiple todos to a list', () => {
  // taip pat kaip auksciau tik
  // ivedam ir paspaudziam 3 k
  // vietoj rankinio ivedimo, pasidaryti funkcija kuri gauna masyva
  // ir ivedas masyvo el reiksme ir paspaudzia mygtuka
});
