import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Select from 'react-select';

import Head from '../head/head';

const options = [
    { value: 'masc', label: 'Masculino' },
    { value: 'fem', label: 'Feminino' },
];

const Gender = (props) => {

    const [name, changeName] = useState();
    const [gender, changeGender] = useState();
    const clickHander = () => {
        props.changeDataName(name || 'Desconhecido')
        props.changeDataGender(gender ? gender.label : 'Sem genero definido')
    }

    const handleChange = gender => {
        changeGender(gender)
    };

    return (
        <div style={containerStyle} className="container-fluid ">
            <Head title={props.title} />
            <div className="container-fluid ">
            <div style={rowStyle} className="row align-self-center">
                <div className="col-md-6 offset-md-3 col-sm-6">
                    <span>Nome</span>
                </div>
                <div className="col-md-6 offset-md-3 col-sm-6">
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        value={name}
                        onChange={e => changeName(e.target.value)}
                        />
                </div>
            </div>
            <div style={rowStyle} className="row  align-self-center">
                <div className="col-md-6 offset-md-3 col-sm-6">
                    <span>Gênero</span>
                </div>
                <div className="col-md-6 offset-md-3 col-sm-6">
                    <Select
                        value={gender}
                        onChange={handleChange}
                        options={options}
                        />
                </div>
            </div>
            <div style={rowStyle} className="row  align-self-center">
                <div className="col-sm-7 offset-sm-7">
                    <Link onClick={clickHander} style={buttonStyle} to="/isjedi/">Continuar</Link>
                </div>
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
    height: '10vh',
    marginTop: 25
}

export default Gender;
