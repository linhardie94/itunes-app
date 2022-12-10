import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Header.js';
import Item from '../pages/Item.js';
import { render, screen, act } from '@testing-library/react';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Item />).toJSON();
  expect(tree).toMatchSnapshot();
});

/*
test('renders learn weather app', () => {
  render(<App />);
  const p = screen.getByText(/Your iTunes Favourites List/i);
  expect(p).toBeInTheDocument();
});


it('renders correctly when the p is found', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toBeInTheDocument('Your iTunes Favourites List');
});
*/

it('renders correctly when there are no items', () => {
  const leaf = renderer.create(<Header />).toJSON();
  expect(leaf).toBeInDocument('Add');
});