import React from 'react';
import renderer from 'react-test-renderer';

import DrawingPanel from '../DrawingPanel';

test('renders drawingpanel correctly', () => {
  const tree = renderer.create(<DrawingPanel />).toJSON();
  expect(tree).toMatchSnapshot();
});