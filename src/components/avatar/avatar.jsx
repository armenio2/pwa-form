import React from 'react';
import { Link } from "react-router-dom";

import Head from '../head/head';

const Avatar = () => {
    return (
        <div style={containerStyle} className="container-fluid">
            <Head title='Registrar' />
            <div className="row  align-self-center">
                <div className="col-md-6 offset-md-3">
                    <span>Escolha seu Avatar</span>
                </div>
            </div>
            <div style={rowStyle} className="row  align-self-center">
                <div className="col-md-6">
                    <Link style={buttonStyle} to="/end/">opção1</Link>
                </div>
                <div className="col-md-6">
                    <Link style={buttonStyle} to="/end/">opção2</Link>
                </div>
                <div className="col-md-6">
                    <Link style={buttonStyle} to="/end/">opção3</Link>
                </div>
                <div className="col-md-6">
                    <Link style={buttonStyle} to="/end/">opção4</Link>
                </div>
                <div className="col-md-6">
                    <Link style={buttonStyle} to="/isjedi/">Voltar</Link>
                </div>
            </div>
        </div>



    );
}

const containerStyle = {
    height: '80vh',
    padding: 0,
}

const buttonStyle = {
    color: 'white',
    backgroundColor: '#B485D8',
    fontWeight: 'bold',
    padding: '15px',
    marginTop: 25,
    border: '1px black solid',
    boxShadow: '5px 5px',
}

const rowStyle = {
    height: '10vh'
}

export default Avatar;
