import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe('Async testing', () => {
  it('Renders Folower on the screen', async () => {
    render(<MockFList />);
    // screen.debug();
    const contactElArr = await screen.findAllByTestId('contact-el');
    expect(contactElArr).not.toHaveLength(0);
  });
});
