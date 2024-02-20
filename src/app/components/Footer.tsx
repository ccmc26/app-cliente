import React from 'react'

const Footer = () => {
  return (
    <footer className='flex felx-col text-black-100 mt-5 border-t border-gray-100'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
                <p className='text-base text-gray-700'>
                    eLibros 2024 <br />
                    All rights reserved &copy;
                </p>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer