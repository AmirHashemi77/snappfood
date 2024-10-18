import React from 'react';
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import App from './App';

// Mocking the components
jest.mock('./Component/LogInAndSignUp/LogInAndSignUpPopUp', () => () => <div>LogInAndSignUpPopUp</div>);
jest.mock('./Page/FoodList/FoodList', () => () => <div>FoodList</div>);
jest.mock('./Page/Home/Home', () => () => <div>Home</div>);
jest.mock('./Page/Restrants/Restrants', () => () => <div>Restrants</div>);

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('App component', () => {
  beforeEach(() => {
    useSelector.mockClear(); // Clear any previous mock call data before each test
  });

  it('renders the Home component by default', () => {
    useSelector.mockReturnValue(false); // showLoginPopUp is false

    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const home =screen.getByText('Home')
    
    expect(home).toBeInTheDocument()
  });





  it('renders the Restrants component when navigating to /service/:category', () => {
    useSelector.mockReturnValue(false); // showLoginPopUp is false

    render(
      <MemoryRouter initialEntries={['/service/italian']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Restrants')).toBeInTheDocument();
  });

  it('renders the FoodList component when navigating to /menu/:restrantId', () => {
    useSelector.mockReturnValue(false); // showLoginPopUp is false

    render(
      <MemoryRouter initialEntries={['/menu/1']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('FoodList')).toBeInTheDocument();
  });

  it('renders LogInAndSignUpPopUp when showLoginPopUp is true', () => {
    useSelector.mockReturnValue(true); // showLoginPopUp is true

    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('LogInAndSignUpPopUp')).toBeInTheDocument();
  });

  it('redirects to Home for unknown routes', () => {
    useSelector.mockReturnValue(false); // showLoginPopUp is false

    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument(); // Redirects to Home
  });
});
