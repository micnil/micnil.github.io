import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { SectionWithYear } from './Section';

const data = {
  section: 'Experience',
  entries: [
    {
      filePath: 'C:/test/file1.md',
      start: 2016,
      end: 2017,
      content: 'foo',
    },
    {
      filePath: 'C:/test/file2.md',
      start: 2014,
      content: 'bar',
    },
    {
      filePath: 'C:/test/file3.md',
      start: 2016,
      end: 2016,
      content: 'baz',
    },
  ],
};

afterEach(cleanup);

describe('SectionWithYear', () => {
  it('sorts entries correctly', () => {
    const { getAllByTestId } = render(
      <SectionWithYear section={data.section} entries={data.entries} />
    );
    const contents = ['bar', 'foo', 'baz'];
    const renderedContents = getAllByTestId('content');
    renderedContents.forEach((contentNode, index) => {
      expect(contentNode.textContent).toBe(contents[index]);
    });
  });

  it('displays years correctly', () => {
    const { queryByText } = render(
      <SectionWithYear section={data.section} entries={data.entries} />
    );

    const current = queryByText('2014 - Present');
    const singleYear = queryByText('2016');
    const pastRange = queryByText('2016 - 2017');

    expect(current).toBeTruthy();
    expect(singleYear).toBeTruthy();
    expect(pastRange).toBeTruthy();
  });
});
