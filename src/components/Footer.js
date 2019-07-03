import React, { Component } from 'react';
import { Container } from 'react-bulma-components/full';

const footerStyle = {
    paddingTop: '5em',
    textAlign: 'center',
    backgroundColor: 'grey'
}


class Footer extends React.Component {
    render() {
        return (
            <div>
                <br />
                <p style={footerStyle}>Made using React.js, Bulma, and Font Awesome by yours truly</p>
            </div>
        );
    }
}

export default Footer;