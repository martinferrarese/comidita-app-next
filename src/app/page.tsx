'use client';
import { Accordion } from '../components/accordion';
import { obtenerTodasLasComidas } from '../services/comidas/comidas';

type Comida = {
  nombre: string;
  ingredientes: Array<string>;
};

export default function Home() {
  const listaDeComidas: Array<Comida> = obtenerTodasLasComidas();
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] justify-items-center p-8 pb-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='row-start-2 flex flex-col items-center gap-8 sm:items-start'>
        <div className='flex self-center'>
          <h1 data-testid='titulo'>COMIDITA</h1>
        </div>
        <Accordion
          index={listaDeComidas[0].nombre}
          titulo={listaDeComidas[0].nombre}
        >
          {listaDeComidas[0].ingredientes.map((ingrediente) => (
            <span key={ingrediente}>{ingrediente}</span>
          ))}
        </Accordion>
        <Accordion
          index={listaDeComidas[1].nombre}
          titulo={listaDeComidas[1].nombre}
        >
          {listaDeComidas[1].ingredientes.map((ingrediente) => (
            <span key={ingrediente}>{ingrediente}</span>
          ))}
        </Accordion>
      </main>
      <footer className='row-start-3 flex flex-wrap items-center justify-center text-center'>
        <h3 data-testid='texto-footer'>Hecho por Martín Ferrarese</h3>
      </footer>
    </div>
  );
}
