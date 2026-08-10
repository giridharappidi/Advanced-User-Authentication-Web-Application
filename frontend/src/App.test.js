import { render, screen } from '@testing-library/react';
import App from './App';

test('renders registration form by default', () => {
  window.history.pushState({}, '', '/');
  render(<App />);
  const registerElements = screen.getAllByText(/register/i);
  expect(registerElements.length).toBeGreaterThan(0);
});

test('renders login page at /login route', () => {
  window.history.pushState({}, '', '/login');
  render(<App />);
  const loginElements = screen.getAllByText(/login/i);
  expect(loginElements.length).toBeGreaterThan(0);
});