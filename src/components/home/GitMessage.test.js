import React from 'react';
import renderer from 'react-test-renderer';
import GitMessage from './GitMessage';

describe('GitMessage', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<GitMessage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
