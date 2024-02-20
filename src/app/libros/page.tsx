import productData from './content';// pages/libros.tsx
import { FC } from 'react';

interface Libro {
  titulo: string;
  autor: string;
  año: number;
  sinopsis: string;
}

const Libros: FC = () => (
  <div>
    <h1>Libros</h1>
    {productData.map((libro: Libro, index: number) => (
      <div key={index}>
        <h2>{libro.titulo}</h2>
        <h3>{libro.autor}</h3>
        <p>{libro.sinopsis}</p>
      </div>
    ))}
  </div>
);

export default Libros;

