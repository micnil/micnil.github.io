import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { SectionWithYear } from './Section';

const entries = [
  {
    filePath: 'C:/test/file1.md',
    start: '2016',
    end: '2017',
    content: 'foo',
  },
  {
    filePath: 'C:/test/file2.md',
    start: '2014',
    content: 'bar',
  },
  {
    filePath: 'C:/test/file3.md',
    start: '2016',
    end: '2016',
    content: 'baz',
  },
  {
    filePath: 'C:/test/file4.md',
    start: '2016-04-07',
    end: '2017-07-25',
    content: 'qux',
  },
];

const data = {
  section: 'Experience',
  entries: entries,
};

describe('SectionWithYear', () => {
  afterEach(cleanup);

  it('sorts entries correctly', () => {
    const { getAllByTestId } = render(
      <SectionWithYear section={data.section} entries={data.entries} />
    );
    const contents = ['bar', 'foo', 'baz', 'qux'];
    const renderedContents = getAllByTestId('content');
    renderedContents.forEach((contentNode, index) => {
      expect(contentNode.textContent).toBe(contents[index]);
    });
  });

  it('displays past range correctly', () => {
    const { getByTestId } = render(
      <SectionWithYear section={data.section} entries={[entries[0]]} />
    );
    const pastRange = getByTestId('year');
    expect(pastRange.textContent).toBe('2016–2017');
  });

  it('displays current correctly', () => {
    const { getByTestId } = render(
      <SectionWithYear section={data.section} entries={[entries[1]]} />
    );
    const current = getByTestId('year');
    expect(current.textContent).toBe('2014–Present');
  });

  it('displays single year correctly', () => {
    const { getByTestId } = render(
      <SectionWithYear section={data.section} entries={[entries[2]]} />
    );
    const singleYear = getByTestId('year');
    expect(singleYear.textContent).toBe('2016');
  });
  it('More specific range if timestamp is more specific', () => {
    const { getByTestId } = render(
      <SectionWithYear section={data.section} entries={[entries[3]]} />
    );
    const singleYear = getByTestId('year');
    expect(singleYear.textContent).toBe('Apr 2016–Jul 2017');
  });
});
