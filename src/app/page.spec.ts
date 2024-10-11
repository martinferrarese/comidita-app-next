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

  it.skip('debe mostrar una lista de comidas', () => {
    const listaDeComidas = [
      {
        comida: 'Milanesas con puré',
        ingredientes: [
          'milanesa de carne',
          'pan rallado',
          'panko',
          'huevo',
          'ajo',
          'papa',
          'manteca',
          'leche',
          'sal',
        ],
      },
      {
        comida: 'Fideos con crema',
        ingredientes: ['fideos', 'crema', 'pimienta', 'sal'],
      },
    ];

    render(Home());

    expect(screen.getByTestId('lista-de-comidas')).toBeTruthy();
  });
});
