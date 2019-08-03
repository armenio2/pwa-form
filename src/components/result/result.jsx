import React from 'react';

import Head from '../head/head';

const Result = (props) => {
    return (
        <div style={containerStyle} className="container-fluid">
            <Head title={props.title} />
            <div className="row  align-self-center">
                <div className="col-md-6 offset-md-3">
                    <span>Parabens você escolheu o lado {props.dataSide || 'neutro'} da força!!! </span>
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
