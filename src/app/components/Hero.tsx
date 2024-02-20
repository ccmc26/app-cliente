'use client';

import Image from 'next/image';
import { CustomButton } from '.';
import { useRouter } from 'next/router';

const Hero = () => {
    const handleScroll = () =>{
        // e.preventDefault()
        // useRouter.push('/login')
    }

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Busca, compra o pide prestado uno de nuestros libros
                </h1>

                <p className='hero__subtitle'>
                    Cuentanos tu experiencia alquilando uno de nuestros libros con
                    nuestro sencillo metodo de alquiler.
                </p>
                <CustomButton 
                title="Más sobre libros"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll} />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src="/fotobibliotecahorizontal.png" alt="hero" fill className='object-contain'/>
                    <div className='hero__image-overlay'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero