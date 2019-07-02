import React, { Component } from 'react';
import { Heading, Button, Columns, Image } from 'react-bulma-components/full';

// styles
const center = {
    textAlign: 'center'
};

const componentStyle = {
    // backgroundColor: '#dbffdf',
    backgroundColor: '#f5faff',
    padding: '1.5rem',
    height: '200%',
};

const imageStyle = {
    width: '65%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '50%'
};


class Side extends React.Component {
    render() {
        return (
            <div style={componentStyle}>
                <div style={{ position: 'sticky', top: '5em' }}>
                    <Heading>Yutaro Thomas Morita</Heading>
                    <hr />
                    <img style={imageStyle} src={process.env.PUBLIC_URL + 'images/profile.jpg'} /><br />
                    <p style={center}>
                        tym479@gmail.com <br />
                        479.925.8596 <br /><br />
                    </p>
                    <div style={center}>
                        <Button rounded>Github</Button>
                        <Button rounded>Linkedin</Button>
                        <Button rounded>Facebook</Button>
                    </div>
                    <br />
                    <div class="menu sticky" style={{ textAlign: 'center' }}>
                        <p class="menu-label"><b>Quick Links</b></p>
                        <ul id="menu" class="menu-list">
                            <li><a href="#intro">Intro</a></li>
                            <li><a href="#aboutMe">About me</a></li>
                            <li><a href="#timeline">Timeline</a></li>
                        </ul>
                    </div>

                </div>
            </div >
        )
    }
}

export default Side;