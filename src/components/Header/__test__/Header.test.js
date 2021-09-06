import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header tests', () => {
  test('should render text passed as props', () => {
    render(<Header title='My Header' />);
    const headerEl = screen.getByText(/my header/i);
    expect(headerEl).toBeInTheDocument();
  });

  it('Header should be a heading with text', () => {
    // Arrange
    render(<Header title='My Header' />);
    //

    // Assert
    const headingEl = screen.getByRole('heading', { name: 'My Header' });
    expect(headingEl).toBeInTheDocument();
  });

  // // pagal nematoma title
  // it('Should have a title "second"', () => {
  //   render(<Header title='My Header' />);

  //   const otherHeding = screen.getByTitle('second');
  //   expect(otherHeding).toBeInTheDocument();
  // });

  // pagal tam skirta test id -- nerekomenduojama overuseinti
  it('Should render main title with id', () => {
    render(<Header title='My Header' />);

    const mainHeading = screen.getByTestId('main-title');
    expect(mainHeading).toBeInTheDocument();
  });
});
