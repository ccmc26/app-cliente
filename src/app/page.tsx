import Image from 'next/image'
import { CustomFilter, Hero, SearchBar } from './components';

export default function Page() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Catalogo libros</h1>
          <p>Tal vez te gusten...</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            {/* <CustomFilter tiitle="editorial"/>
            <CustomFilter tiitle="autor"/> */}
          </div>
        </div>
      </div>
    </main>
  );
}