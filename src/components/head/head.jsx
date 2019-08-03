import React from 'react';

const Header = (props) => {
    return (
        <div style={containerStyle} class="container-fluid">
            <div class="row">
                <div class="col">
                    <span>{props.title}</span>
                </div>
            </div>
        </div>
    );
}

const containerStyle = {
    height: '20vh',
    width: '100%',
    backgroundColor: '#4F4487',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
}

export default Header;
