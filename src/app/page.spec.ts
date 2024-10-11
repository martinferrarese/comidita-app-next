import { cleanup, render, screen } from '@testing-library/react';
import Home from './page';
import { describe, it, expect, afterEach } from 'vitest';

describe('Página inicial', () => {
  afterEach(() => {
    cleanup();
  });

  it("debe mostrar el título 'Comidita' y el footer", () => {
    render(Home());

    expect(screen.getByTestId('titulo')).toBeTruthy();
    expect(screen.getByTestId('titulo').innerHTML).toBe('COMIDITA');
    expect(screen.getByTestId('texto-footer').innerHTML).toBe(
      'Hecho por Martín Ferrarese'
    );
  });

  it('debe mostrar el listado de comidas', () => {
    render(Home());

    expect(screen.getAllByTestId('lista-de-comidas')).toBeTruthy();
  });
});
