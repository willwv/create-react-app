import React from 'react'
import './area-atuacao-topico.css'

const AreaAtuacaoTopico = (props) => {

    let iconPath = "/icons/atuacao/" + props.icon +".svg";
    return(
        <span className="atuacao-direitos-topico">
            <img src={iconPath} alt={props.descricaoImagem}/>
            <span className="atuacao-direitos-topico-titulo">{props.titulo}</span>
            <span className="atuacao-direitos-topico-subtitulo">{props.subtitulo}</span>
        </span>
    )
}

export default AreaAtuacaoTopico;