import React from 'react';
import Head from '../head/head';

import useAxios from 'axios-hooks'

const Result = (props) => {
    const [{ data },] = useAxios('https://viacep.com.br/ws/05361050/json/')
    const jedi = <img alt='foo' src={'https://vignette.wikia.nocookie.net/pt.starwars/images/5/59/ThreeJedi.jpg/revision/latest?cb=20100921170459'} />
    const sith = <img alt='foo' src={'https://i2.wp.com/sociedadejedi.com.br/wp-content/uploads/2016/12/received_1800610233544302.jpeg?fit=700%2C700&ssl=1'} />

    return (
        <div style={containerStyle} className="container-fluid">
            <Head title={props.title} />
            <div className="container" >
                <div className="row  align-self-center">
                    <div className="col-8">
                        <span style={spanStyle}>Parabens você escolheu o lado {props.side || 'Neutro'} da força!!! </span>
                    </div>
                    <div className="col-8">
                        {props.side === 'Sith' ? sith : jedi}
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
