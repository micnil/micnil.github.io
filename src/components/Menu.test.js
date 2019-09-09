import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';

import Menu from './Menu';

afterEach(cleanup);

describe('Menu', () => {
  it('Display correctly', () => {
    const { container } = render(
      <Menu>
        <span>FOO</span>
        <span>BAR</span>
        <span>BAZ</span>
      </Menu>
    );
    expect(container.textContent).toBe('FOO/BAR/BAZ');
  });
});
