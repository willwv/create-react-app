import React from 'react'
import './default-buttom.css'

const DefaultButtom = (props) => {
    let style = {}

    if(props.backgroundColor){
        style = {'background': (props.backgroundColor)}
    }

    return(
        <span className="buttom-vamos-conversar" style={style} onClick={() => props.onClick()}>
                <span className="buttom-vamos-conversar-label">
                    {props.texto}
                </span>
        </span>
    )
}

export default DefaultButtom;