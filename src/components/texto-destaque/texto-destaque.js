import React from 'react'
import './texto-destque.css'

const TextoDestaque = (props) => {
    let imgDir = '/images/destaques/' + props.image + '.jpg';
    let textLink = '/pages/blog.html?text=' + props.textName;

    return(
        <span className="blog-destaques">
            <span className="blog-destaques-destaque">
                <img src={imgDir} alt={props.imageDescription}/>
                <span className="blog-destaques-destaque-titulo">{props.title}</span>
                <span className="blog-destaques-destaque-categoria">{props.category}</span>
                <span className="blog-destaques-destaque-texto">{props.shortDescription}</span>
                <span className="ver-mais-box">
                    <span className="ver-mais-box-text"><a href={textLink}>Ver Mais</a></span>
                </span>
            </span>
        </span>
    )
}

export default TextoDestaque;