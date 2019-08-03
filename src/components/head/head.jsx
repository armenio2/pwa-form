import React from 'react';

const Header = (props) => {
    return (
        <div style={containerStyle} className="container-fluid">
            <div className="row">
                <div className="col">
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
