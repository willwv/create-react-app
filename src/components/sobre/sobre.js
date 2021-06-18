import React from 'react'
import './sobre.css'

const Sobre = () => {
    return(
        <span className="sobre">
            <span className="sobre-box">
                <span className="sobre-box-image">
                    <img src="/images/sobre/thais-lara.png" alt="Advogada Thais Lara"/>
                </span>
                <span className="sobre-box-text">
                    <span className="sobre-box-text-titulo">Thais Lara</span>
                    <span className="linha-separadora"></span>
                    <span className="sobre-box-text-cargo">Fundadora</span>
                    <span className="sobre-box-text-descricao">
                        Thais Lara Gonçalves de Resende é advogada graduada pela Faculdade de Direito Milton Campos desde 2016. Especializou-se em Direito Público pela Faculdade Arnaldo em 2017. Tornou-se mestre em Direito Econômico e Social pela Faculdade de Direito Milton Campos em 2018. Inscrição na OAB/MG 172.217. Saiba mais nos textos em destaque.
                    </span>
                </span>
            </span>
        </span>
    )
}

export default Sobre;