import React from 'react';
import { render } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });
});
