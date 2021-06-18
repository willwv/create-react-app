import React from 'react'
import './header.css'


class Header extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }
    onScroll(){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementsByClassName("header")[0].style.backgroundColor = "#242C40";
        } else {
            document.getElementsByClassName("header")[0].style.backgroundColor = "transparent";
        }
    }
    render(){
        return(
            <div className="header">
                <span className="header-superior">
                    <span className="contato-advogada">
                        <span>escritorio@thaislara.com</span>
                        <span>(31) 98414-9297</span>
                    </span>
                    <span className="redes-sociais">
                        <a href="https://wa.me/5531984149297" target="_blank" rel="noopener noreferrer"><img src="/icons/header/whatsapp.svg" alt="Whatsapp icon"/></a>
                        <a href="https://www.instagram.com/thaislgr/" target="_blank" rel="noopener noreferrer"><img src="/icons/header/instagram.svg" alt="Instagram icon"/></a>
                        <a href="https://www.facebook.com/thais.lararesende" target="_blank" rel="noopener noreferrer"><img src="/icons/header/facebook.svg" alt="Facebook icon"/></a>
                    </span>
                </span>
                <span className="header-line"></span>
                <span className="header-inferior">
                    <span className="logo">
                        <img src="/icons/header/logo.svg"  alt="Thais Lara logo"/>
                    </span>
                    <span className="options">
                        <span id="header-home" onClick={() => this.props.onClickInicio()}>Início</span>
                        <span id="header-escritorio" onClick={() => this.props.onClickEscritorio()}>Escritório</span>
                        <span id="header-atendimento" onClick={() => this.props.onClickAtendimento()}>Atendimento</span>
                        <span id="header-atuacao" onClick={() => this.props.onClickAtuacao()}>Atuação</span>
                        <span id="header-sobre" onClick={() => this.props.onClickSobre()}>Sobre</span>
                        <span id="header-blog" onClick={() => this.props.onClickBlog()}>Blog</span>
                    </span>
                    <span className="options-mobile">
                        <img src="/icons/header/options.svg"  alt="Mobile options"/>
                    </span>
                </span>
            </div>
        )
    }
}

export default Header;