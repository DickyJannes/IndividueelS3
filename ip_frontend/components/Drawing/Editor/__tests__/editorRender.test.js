import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

import Editor from '../Editor';

test('renders editor correctly', () => {
  const tree = renderer.create(<Editor />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('buttonText should change when clicking on the drawingbutton', () => {
  const {getByTestId, getByText, queryByTestId, toJSON} = render(<Editor />)

  const button = getByText('start drawing')
  fireEvent.press(button)

  expect(getByText('reset')).not.toBeFalsy();
})

test('Drawingpanel starts as not visible but is visible after clicking button', async () => {
  const {getByTestId, getByText, queryByTestId, toJSON} = render(<Editor />)

  const button = getByText('start drawing')
  const drawingPanel = queryByTestId("drawingPanel")

  expect(drawingPanel).toBeNull();
  fireEvent.press(button)

  

})