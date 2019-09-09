import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';

import Post from './Post';

const data = {
  title: 'Project Foo',
  excerpt: 'introduction text',
  content: 'full content',
  tags: ['foo', 'bar', 'baz'],
  year: 2016,
};

afterEach(cleanup);

describe('Post', () => {
  it('toggles excerpt correctly', () => {
    const { getByText, queryByText } = render(<Post {...data} />);

    const excerpt = queryByText('introduction text');
    expect(excerpt).toBeTruthy();
    fireEvent.click(getByText('Read more'));
    const fullContent = queryByText('full content');
    expect(fullContent).toBeTruthy();
  });
});
