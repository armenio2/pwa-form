import React from 'react';
import { Link } from "react-router-dom";

import Head from '../head/head';

const Avatar = (props) => {

    return (
        <div style={containerStyle} className="container-fluid">
            <Head title='Registrar' />
            <div className="row align-self-center">
                <div className="col-md-6">
                    <span>Escolha seu Avatar</span>
                </div>
            </div>
            <div style={rowStyle} className="row justify-content-around">
                <div className="col-6">
                    <Link onClick={() => props.changeDataAvatar('1')} style={buttonStyle} to="/end/">opção1</Link>
                </div>
                <div className="col-6">
                    <Link onClick={() => props.changeDataAvatar('2')} style={buttonStyle} to="/end/">opção2</Link>
                </div>
            </div>
            <div style={rowStyle} className="row justify-content-around">
                <div className="col">
                    <Link onClick={() => props.changeDataAvatar('3')} style={buttonStyle} to="/end/">opção3</Link>
                </div>
                <div className="col">
                    <Link onClick={() => props.changeDataAvatar('4')} style={buttonStyle} to="/end/">opção4</Link>
                </div>
            </div>
            <div style={rowStyle} className="row justify-content-around">
                <div className="col">
                    <Link style={buttonStyle} to="/isjedi/">Voltar</Link>
                </div>
            </div>
        </div>



    );
}

const containerStyle = {
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
    height: '10vh',
    margin: 25
}

export default Avatar;
