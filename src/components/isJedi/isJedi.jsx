import React from 'react';
import { Link } from "react-router-dom";

import Head from '../head/head';

const IsJedi = (props) => {

    const clickJediSide = () => {
        props.changeDataSide('Jedi');
    }

    const clickDarkSide = () => {
        props.changeDataSide('Sith');
    }

    return (
        <div style={containerStyle} className="container-fluid">
            <Head title={props.title} />
            <div className="container">
                <div style={rowStyle} className="row align-itens-center">
                    <div className="col-12">
                        <span style={spanStyle}>The Force Side</span>
                    </div>
                </div>
                <div style={rowStyle} className="row justify-content-between">
                    <div className="col-4">
                        <Link onClick={clickJediSide} style={choiseButtonStyle} to="/users/">JEDI</Link>
                    </div>
                    <div className="col-4">
                        <Link onClick={clickDarkSide} style={choiseButtonStyle} to="/users/">SITH</Link>
                    </div>
                </div>
                <div style={rowStyle} className="row align-self-center">
                    <div className="col-sm-7">
                        <Link style={buttonStyle} to="/">Voltar</Link>
                    </div>
                </div>
            </div>
        </div>



    );
}

const containerStyle = {
    height: '80vh',
    padding: 0,
    textAlign: 'center'
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

const choiseButtonStyle = {
    color: 'white',
    backgroundColor: 'black',
    fontWeight: 'bold',
    padding: '35px',
    marginTop: 25,
    border: '2px grey solid',
    boxShadow: '5px 5px',
}

const rowStyle = {
    height: '12vh'
}

const spanStyle = {
    fontWeight: 'bold',
    fontSize: 25,
}

export default IsJedi;
