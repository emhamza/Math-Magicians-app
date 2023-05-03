import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <Router>
        <App />
      </Router>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
