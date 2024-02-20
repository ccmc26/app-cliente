import productData from './content';// pages/libros.tsx
import { FC } from 'react';

interface Libro {
  titulo: string;
  autor: string;
  año: number;
  sinopsis: string;
}

const Page: FC = () => {
  <div className='flex-1 pt-36 padding-x'>
    <h1>Libros disponibles</h1>
    {productData.map((libro: Libro, index: number) => (
      <div key={index} className='car-card'>
        <h2>{libro.titulo}</h2>
        <h3>{libro.autor}</h3>
        <p>{libro.sinopsis}</p>
      </div>
    ))}
  </div>
  
}


export default Page;