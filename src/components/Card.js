import React from 'react'
import '../styles/card.css';
import Ilustration from '../images/illustration-article.svg';
import photoPerfil from '../images/image-avatar.webp';

export const Card = () => {
    return (
        <div className='containerPrincipal'>
            <img src={Ilustration} alt='illustration' />
            <h3>
                Learning
            </h3>
            <h2>Published 21 Dec 2023</h2>
            <h1>HTML & CSS foundations</h1>
            <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
            <div className='author'>
                <img src={photoPerfil} alt='photoPerfil' />
                <h3>Greg Hooper</h3>

            </div>
        </div>
    )
}
