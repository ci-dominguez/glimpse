import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main>
      <p className='font-r-t text-4xl'>Thin R Font</p>
      <p className='font-r-ul text-4xl'>UltraLight R Font</p>
      <p className='font-r-ul-i text-4xl'>UltraLight Italic R Font</p>
      <p className='font-s-r text-4xl'>Regular S Font</p>
      <p className='font-s-m text-4xl'>Medium S Font</p>
    </main>
  </StrictMode>
);
