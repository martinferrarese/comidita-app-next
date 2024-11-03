'use client';

import React, { FC, ReactNode } from 'react';

type AccordionProps = {
  titulo: string;
  children: ReactNode;
};

export const Accordion: FC<AccordionProps> = (props) => {
  return (
    <div data-testid='comida' className='border-b border-slate-200'>
      <button
        onClick={() => abrir(2)}
        className='flex w-full items-center justify-between gap-6 py-5'
      >
        <span>{props.titulo}</span>
        <span id='icon-2' className='transition-transform duration-300'>
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
        id='content-2'
        className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out'
      >
        <div className='flex flex-col pb-5 text-sm text-slate-500'>
          {props.children}
        </div>
      </div>
    </div>
  );
};

function abrir(index: number) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);

  const minusSVG = `
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
       <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
     </svg>
   `;
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
