'use client';
import Image from 'next/image'
import { CustomButtonProps } from '../../../types';
import Link from 'next/link';

const CustomButton = ({ title, containerStyles, handleClick, btnType, href}: CustomButtonProps) => {
    return (
        <Link href={href || '#'}>
            <button disabled={false} type={btnType || 'button'} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
                <span className={`flex-1`}>
                    {title}
                </span>
            </button>
        </Link>
    )
}

export default CustomButton