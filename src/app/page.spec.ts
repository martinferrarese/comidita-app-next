import { render, screen } from '@testing-library/react';
import Home from './page';
import { describe, it, expect } from 'vitest';

describe('Página inicial', () => {
  it('Smoke test', () => {
    render(Home());
    expect(
      screen.getByText('Save and see your changes instantly.')
    ).toBeTruthy();
  });
});
