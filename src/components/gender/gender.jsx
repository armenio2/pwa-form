import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Head from '../head/head';

const Gender = () => {
    return (
        <div style={containerStyle} class="container-fluid">
            <Head title='Registrar' />
            <div class="row align-items-start">
                <div class="col">
                    <Link to="/about/">Continuar</Link>
                </div>
            </div>
        </div>



    );
}

const containerStyle = {
    height: '80vh',
    padding: 0
}

export default Gender;
