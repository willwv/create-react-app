import React from 'react'
import './atendimento.css'

import DefaultButtom from '../default-buttom/default-buttom'

const Atendimento = (props) => {
    return(
        <div className="atendimento">
            <span className="atendimento-imagens">
                <img className="atendimento-imagem-senhoras" src="/images/atendimento/senhoras.png" alt="Senhoras abraçadas"/>
                <img className="atendimento-imagem-senhoras-sombra" src="/images/atendimento/senhoras-sombra.svg" alt="Background pontilhado"/>
            </span>
            <span className="atendimento-textos">
                <span className="atendimento-textos-titulo">Atendimento<br/> individual e único</span>
                <span className="linha-separadora"></span>
                <span className="atendimento-textos-descricao">
                    Os temas aqui tratados por vezes são difíceis e, por isso, tentamos fazer com que o nosso atendimento seja acolhedor e pautado por suas necessidades. Fazemos reuniões online, em nosso escritório em Belo Horizonte e, em caso de necessidade, nos deslocamos dentro da Grande BH.
                </span>
                {props.showButtom && <DefaultButtom texto="Vamos conversar" onClick={() => props.onClick()}></DefaultButtom>}
            </span>
        </div>
    )
}

export default Atendimento;