import React from 'react';
import { Link } from "react-router-dom";

import Head from '../head/head';

const Avatar = (props) => {
    const gender = props.dataGender || 'Indefinido'
    return (
        <div style={containerStyle} className="container-fluid">
            <Head title='Registrar' />
            <div className="container">
                <div className="row align-self-center">
                    <div className="col-md-12">
                        <span style={textStyle}>Escolha seu Avatar</span>
                    </div>
                </div>
                <div style={rowStyle} className="row justify-content-around">
                    <div className="col-6">
                        <Link onClick={() => props.changeDataAvatar('1')} style={buttonAvatarStyle} to="/end/">{`Opção 1 ${gender}`}</Link>
                    </div>
                    <div className="col-6">
                        <Link onClick={() => props.changeDataAvatar('2')} style={buttonAvatarStyle} to="/end/">{`Opção 2 ${gender}`}</Link>
                    </div>
                </div>
                <div style={rowStyle} className="row justify-content-around">
                    <div className="col">
                        <Link onClick={() => props.changeDataAvatar('3')} style={buttonAvatarStyle} to="/end/">{`Opção 3 ${gender}`}</Link>
                    </div>
                    <div className="col">
                        <Link onClick={() => props.changeDataAvatar('4')} style={buttonAvatarStyle} to="/end/">{`Opção 4 ${gender}`}</Link>
                    </div>
                </div>
                <div style={rowStyle} className="row justify-content-around">
                    <div className="col">
                        <Link style={buttonStyle} to="/isjedi/">Voltar</Link>
                    </div>
                </div>
            </div>
        </div>



    );
}

const containerStyle = {
    padding: 0,
    textAlign: 'center'
}

const textStyle = {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 35
}

const buttonAvatarStyle = {
    color: 'white',
    backgroundColor: 'grey',
    fontWeight: 'bold',
    padding: '15px',
    marginTop: 25,
    border: '1px black solid',
    boxShadow: '5px 5px',
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
