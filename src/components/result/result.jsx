import React from 'react';
import Head from '../head/head';

import useAxios from 'axios-hooks'

const Result = (props) => {
    const [{ data },] = useAxios('https://viacep.com.br/ws/05361050/json/')
    return (
        <div style={containerStyle} className="container-fluid">
            <Head title={props.title} />
            <div className="container" >
                <div className="row  align-self-center">
                    <div className="col-8">
                        <span style={spanStyle}>Parabens você escolheu o lado {props.side || 'Neutro'} da força!!! </span>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-12 align-self-end">
                        <span>Feito por Armenio de {data ? data.localidade : ''}</span>
                    </div>
                </div>
            </div>
        </div >
    );
}

const containerStyle = {
    height: '100vh',
    padding: 0,
}

const spanStyle = {
    fontWeight: 'bold',
    fontSize: 25,
}

export default Result;
