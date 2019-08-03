import React from 'react';
import { Link } from "react-router-dom";

import Head from '../head/head';

const Gender = () => {
    return (
        <div style={containerStyle} className="container-fluid">
            <Head title='Registrar' />
            <div className="row align-self-center">
                <div className="col-md-6 offset-md-3">
                    <span>Nome</span>
                </div>
            </div>
            <div style={rowStyle} className="row  align-self-center  ">
                <div className="col-md-6 offset-md-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" />
                </div>
            </div>
            <div className="row  align-self-center">
                <div className="col-md-6 offset-md-3">
                    <span>Gênero</span>
                </div>
            </div>
            <div style={rowStyle} className="row  align-self-center">
                <div className="col-md-6 offset-md-3">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Masculino</option>
                        <option>Feminino</option>
                    </select>
                </div>
            </div>
            <div style={rowStyle} className="row  align-self-center">
                <div className="col-sm-7 offset-sm-7">
                    <Link style={buttonStyle} to="/isjedi/">Continuar</Link>
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

export default Gender;
