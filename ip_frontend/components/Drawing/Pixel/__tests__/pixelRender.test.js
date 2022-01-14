import React from 'react';
import renderer from 'react-test-renderer';

import Pixel from '../Pixel';

test('renders pixel correctly', () => {
  const tree = renderer.create(<Pixel />).toJSON();
  expect(tree).toMatchSnapshot();
});