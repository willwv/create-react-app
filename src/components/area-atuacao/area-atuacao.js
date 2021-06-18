import React from 'react'
import './area-atuacao.css'

import AreaAtuacaoTopico from '../area-atuacao-topico/area-atuacao-topico'
import DefaultButtom from '../default-buttom/default-buttom'

const AreaAtuacao = (props) => {
    return(
        <div className="atuacao">
            <span className="atuacao-textos">
                <span className="atuacao-textos-titulo">Nossas áreas de atuação</span>
                <span className="linha-separadora"></span>
            </span>
            <span className="atuacao-direitos">
                <AreaAtuacaoTopico
                    icon="sucessao"
                    descricaoImagem="Direito de sucessão"
                    titulo="Direito de sucessões"
                    subtitulo="Realizamos planejamentos sucessórios e processos de inventário.">
                </AreaAtuacaoTopico>
                <AreaAtuacaoTopico
                    icon="previdenciario"
                    descricaoImagem="Direito previdenciário"
                    titulo="Direito previdenciário"
                    subtitulo="Oferecemos planejamento previdenciário e revisão de benefício, bem como acessória para requerer o melhor benefício.">
                </AreaAtuacaoTopico>
                <AreaAtuacaoTopico
                    icon="familia"
                    descricaoImagem="Direito da família"
                    titulo="Direito da família"
                    subtitulo="Atendemos você e sua família em casos de curatela, tutela, reconhecimento de paternidade, ação de alimentos e divórcios.">
                </AreaAtuacaoTopico>
                <AreaAtuacaoTopico
                    icon="consumidor"
                    descricaoImagem="Direito do consumidor"
                    titulo="Direito do consumidor"
                    subtitulo="Estamos prontos para atendê-lo em casos de quebra de contrato, negligência, atraso e cancelamento de voos, entre outros.">
                </AreaAtuacaoTopico>
            </span>
            {props.showButtom && <DefaultButtom texto="Vamos conversar" onClick={() => props.onClick()}></DefaultButtom>}
        </div>
    )
}

export default AreaAtuacao;