'use client';
import React from 'react'
import { useState } from 'react';
import { SearchManufacturerProps } from '../../../types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image';

const SearchManufacturer = ({ manufacturer, setManufacturer}: SearchManufacturerProps) => {
    const [query, setQuery] = useState('')
    return (
        <div className='search-manufacturer'>
            <Combobox>
                <div className='relative w-full'>
                    <Combobox.Button className="absolute top-[14px]">
                        <Image src="/Grupo_Planeta_logo.png"
                            width={20} 
                            height={20}
                            className="ml-4"
                            alt="Logo Editorial"
                        />
                    </Combobox.Button>
                    <Combobox.Input className="search-manufacturer__input" placeholder='Grupo Planeta' displayValue={(manufacturer: string) => manufacturer}
                    onChange={(e) => setQuery(e.target.value)}/>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer