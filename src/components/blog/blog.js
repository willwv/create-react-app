import React from 'react'
import './blog.css'

import TextoDestaque from '../texto-destaque/texto-destaque'

const Blog = (props) => {
    return(
        <span id="blog" className="blog">
            <span className="blog-textos">
                <span className="blog-textos-titulo">Textos em destaque</span>
                <span className="linha-separadora"></span>
            </span>
            <span className="blog-destaques">
                <TextoDestaque
                    image="meu-eu-advogada"
                    textName="meu-eu-advogada" 
                    imageDescription="Thais Lara" 
                    title="Meu eu advogada" 
                    category="Texto" 
                    shortDescription="Um pouco sobre mim e minha paixão pelo direito.">        
                </TextoDestaque>
                <TextoDestaque 
                    image="meu-eu-advogada"
                    textName="meu-eu-advogada" 
                    imageDescription="Thais Lara" 
                    title="Meu eu advogada" 
                    category="Texto" 
                    shortDescription="Um pouco sobre mim e minha paixão pelo direito.">        
                </TextoDestaque>
                <TextoDestaque
                    image="meu-eu-advogada"
                    textName="meu-eu-advogada" 
                    imageDescription="Thais Lara" 
                    title="Meu eu advogada" 
                    category="Texto" 
                    shortDescription="Um pouco sobre mim e minha paixão pelo direito.">        
                </TextoDestaque>
            </span>
        </span>
    )
}

export default Blog;