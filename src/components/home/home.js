import React from 'react'
import './home.css'

const Home = () => {
    return(
        <div className="home">
            <img src="/images/home/tela-inicial.png" alt="Advogado assinando contrato"/> 
            <span className="home-text">
                <span className="home-text-title">Ajudando você em <br/>todos os momentos</span>
                <span className="home-text-subtitle">Seja preventivamente ou em momentos de <br/>dificuldades, nosso objetivo é apresentar a melhor <br/>solução para a sua situação.</span>
            </span>
        </div>
    )
}

export default Home;