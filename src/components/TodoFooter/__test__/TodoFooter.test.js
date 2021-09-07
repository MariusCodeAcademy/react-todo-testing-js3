import { screen, render } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

function MockTodoFooter({ numberOfIncompleteTasks }) {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
}

describe('Footer tests', () => {
  // Hooks
  //
  beforeAll(() => {
    // vyksta pries vygdant visus testus esancius siame descibe bloke
    console.log('beforeAll');
  });
  beforeEach(() => {
    // vyksta pries vygdant kieviena testa esancius siame descibe bloke
    console.log('beforeEach');
  });
  afterEach(() => {
    // vyksta po kievieno testo esancius siame descibe bloke
    console.log('afterEach');
  });
  afterAll(() => {
    // vyksta pries vygdant visus testus esancius siame descibe bloke
    console.log('afterAll');
  });

  it('Should render correwct amount of tasks', () => {
    //Arrange
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);

    // Assert
    const paragEl = screen.getByText(/5 tasks left/i);
    expect(paragEl).toBeInTheDocument();
    expect(paragEl).toBeVisible();
  });

  it('Should render correct single item ending', () => {
    //Arrange
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    // Assert
    const paragEl = screen.getByText(/1 task left/i);
    expect(paragEl).toBeInTheDocument();
  });

  it('Should render correct html el p', () => {
    //Arrange
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    // Assert
    const paragEl = screen.getByText(/1 task left/i);
    expect(paragEl).toContainHTML('p');
  });
});
