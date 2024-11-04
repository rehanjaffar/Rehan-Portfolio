import React from 'react'
import { content } from '../Content'

export default function Footer() {
    const { Footer } = content;
    return (
        <footer className='text-center'>
            <h6 className='mb-3'>
                M REHAN
            </h6>
            <p>
                {Footer.text}
            </p>
        </footer>
    )
}
