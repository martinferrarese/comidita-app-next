'use client';
import { obtenerTodasLasComidas } from '../services/comidas/comidas';

type Comida = {
  nombre: string;
  ingredientes: Array<string>;
};

export default function Home() {
  const listaDeComidas: Array<Comida> = obtenerTodasLasComidas();
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='row-start-2 flex flex-col items-center gap-8 sm:items-start'>
        <div className='flex self-center'>
          <h1 data-testid='titulo'>COMIDITA</h1>
        </div>
        <div data-testid='comida' className='border-b border-slate-200'>
          <button
            onClick={() => toggleAccordion(1)}
            className='flex w-full items-center justify-between gap-6 py-5'
          >
            <span>{listaDeComidas[0].nombre}</span>
            <span id='icon-1' className='transition-transform duration-300'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='h-4 w-4'
              >
                <path
                  fill-rule='evenodd'
                  d='M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z'
                  clip-rule='evenodd'
                />
              </svg>
            </span>
          </button>
          <div
            id='content-1'
            className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out'
          >
            <div className='flex flex-col pb-5 text-sm text-slate-500'>
              {listaDeComidas[0].ingredientes.map((ingrediente) => (
                <span key={ingrediente}>{ingrediente}</span>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className='row-start-3 flex flex-wrap items-center justify-center gap-6 pt-20'>
        <h3 data-testid='texto-footer'>Hecho por Martín Ferrarese</h3>
      </footer>
    </div>
  );
}

function toggleAccordion(index: number) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);

  // SVG for Down icon
  // SVG for Minus icon
  const minusSVG = `
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
     <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
   </svg>
 `;

  // SVG for Plus icon
  const plusSVG = `
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
     <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
   </svg>
 `;

  // Toggle the content's max-height for smooth opening and closing
  if (content) {
    if (content?.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0';
      if (icon) icon.innerHTML = plusSVG;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      if (icon) icon.innerHTML = minusSVG;
    }
  }
}
