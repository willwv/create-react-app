import React from 'react'
import './escritorio.css'

const Escritorio = () => {
    return(
        <div className="escritorio">
            <span className="escritorio-titulo">
                <span className="escritorio-titulo-texto">Conheça nosso<br/> escritório</span>
                <span className="linha-separadora"></span>
            </span>
            <span className="escritorio-descricao">
                O objetivo é satisfazer a demanda de forma prática e eficiente, apresentando o melhor parecer e informando sobre todos os trâmites para a resolução dos problemas apresentados. Cada caso é único e assim deve ser a solução e tratamento ofertado. O escritório tem como sede Belo Horizonte, mas atua em todo território nacional através de atendimentos virtuais.
            </span>
        </div>
    )
}

export default Escritorio;