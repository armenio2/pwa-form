import React, { useState } from 'react';
import Head from '../head/head';

import useAxios from 'axios-hooks'

const Result = (props) => {
    const [{ data, loading, error }, refetch] = useAxios(
        'https://viacep.com.br/ws/01001000/json/'
    )

    return (
        <div style={containerStyle} className="container-fluid">
            <Head title={props.title} />
            <div className="row  align-self-center">
                <div className="col-8">
                    <span>Parabens você escolheu o lado {props.side || 'Neutro'} da força!!! </span>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <span>{data ? data.cep : ''}</span>
                </div>
            </div>
        </div >
    );
}

const containerStyle = {
    height: '80vh',
    padding: 0,
}

export default Result;
