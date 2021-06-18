import React from 'react'
import './home-inputs.css'

import DefaultButtom from '../default-buttom/default-buttom'

const HomeInputs = (props) => {
    return(
        <div className="inputs">
            <span className="inputs-container">
                <input id="inputs-nome" className="input" name="Nome" placeholder="Nome"/>
                <span className="loading"></span>

                <input id="inputs-email" className="input" name="Email" placeholder="E-mail"/>
                <input type="hidden" name="Data" value="x-sheetmonkey-current-date-time"/>
                <img id="loading" className="loading" src="/images/Spinner-1s-44px.gif" alt="Loading gif"/>
                {props.showButtom && <DefaultButtom texto="Vamos conversar" backgroundColor="#A58656" onClick={() => {}}></DefaultButtom>}
            </span>
        </div>
    )
}

export default HomeInputs;