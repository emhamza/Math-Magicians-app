import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quotes from './Quotes';

describe('Quotes', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays the quote and author', () => {
    const { getByText } = render(<Quotes />);
    expect(getByText(/Loading.../i)).toBeInTheDocument();
  });
});
