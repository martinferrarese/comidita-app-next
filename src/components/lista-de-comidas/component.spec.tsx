import { cleanup, render, screen } from '@testing-library/react';
import ListaDeComidas from './component';
import { describe, it, expect, afterEach, vi } from 'vitest';

describe('Lista de comidas', () => {
  afterEach(() => {
    cleanup();
  });

  it('debe mostrar comidas', () => {
    vi.mock('../../services/comidas/comidas', () => ({
      obtenerTodasLasComidas: vi.fn().mockReturnValue([
        {
          nombre: 'Milanesa con puré',
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
          nombre: 'Fideos con crema',
          ingredientes: ['fideos', 'crema', 'pimienta', 'sal'],
        },
      ]),
    }));
    render(<ListaDeComidas />);

    const listaDeComidas = screen.queryAllByTestId('comida-', { exact: false });
    const listaDeIngredientesDeMilanesa = screen.queryAllByTestId(
      'Milanesa con puré-ingrediente-',
      {
        exact: false,
      }
    );
    const listaDeIngredientesDeFideos = screen.queryAllByTestId(
      'Fideos con crema-ingrediente-',
      {
        exact: false,
      }
    );
    expect(listaDeComidas).toBeTruthy();
    expect(listaDeComidas[0].innerHTML).toContain('Milanesa con puré');
    expect(listaDeIngredientesDeMilanesa[0].innerHTML).toBe(
      '* milanesa de carne'
    );
    expect(listaDeComidas[1].innerHTML).toContain('Fideos con crema');
    expect(listaDeIngredientesDeFideos[0].innerHTML).toBe('* fideos');
  });
});
