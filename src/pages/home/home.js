import React from 'react';
import './home.css'

import AreaAtuacao from '../../components/area-atuacao/area-atuacao';
import Atendimento from '../../components/atendimento/atendimento';
import Blog from '../../components/blog/blog';
import Escritorio from '../../components/escritorio/escritorio';
import Footer from '../../components/footer/footer';
import Home from '../../components/home/home';
import HomeInputs from '../../components/home-inputs/home-inputs';
import Sobre from '../../components/sobre/sobre';
import Header from '../../components/header/header';

function goTo(divId){
    let element = document.getElementById(divId);

    const y = element.getBoundingClientRect().top + window.pageYOffset -97;
    window.scrollTo({top: y, behavior: 'smooth'});
}

const HomePage = () => {
    return (
        <>
          <Header
            onClickInicio={()=>goTo("home")}
            onClickEscritorio={()=>goTo("escritorio")}
            onClickAtendimento={()=>goTo("atendimento")}
            onClickAtuacao={()=>goTo("atuacao")}
            onClickSobre={()=>goTo("sobre")}
            onClickBlog={()=>goTo("destaques")}
          ></Header>
          <div id="home">
            <Home></Home>
          </div>
          <div id="inputs">
            <HomeInputs showButtom></HomeInputs>
          </div>
          <div id="escritorio">
            <Escritorio></Escritorio>
          </div>
          <div id="atendimento">
            <Atendimento showButtom onClick={()=>goTo("home")}></Atendimento>
          </div>
          <div id="atuacao">
            <AreaAtuacao showButtom onClick={()=>goTo("home")}></AreaAtuacao>
          </div>
          <div id="sobre">
            <Sobre></Sobre>
          </div>
          <div id="destaques">
            <Blog></Blog>
          </div>
          <Footer></Footer>
        </>
    );
}

export default HomePage;