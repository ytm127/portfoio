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
    height: '140%',
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
                <div style={{ position: 'sticky', top: '3em' }}>
                    <Heading style={center} size='2'>Yutaro Thomas Morita</Heading>
                    <hr />
                    <img style={imageStyle} src='https://github.com/ytm127/portfoio/blob/master/public/images/profile.JPG?raw=true' /><br />
                    <p style={center}>
                        tym479@gmail.com <br />
                        479.925.8596 <br /><br />
                    </p>
                    <div style={center}>
                        <Button renderAs="a" href="https://github.com/ytm127/" rounded style={{ margin: '0 .25em 0 .25em' }}>Github</Button>
                        <Button renderAs="a" href="https://www.linkedin.com/in/thomasmorita/" rounded style={{ margin: '0 .25em 0 .25em' }}>Linkedin</Button>
                        <Button renderAs="a" href="https://www.facebook.com/thomas.morita" rounded style={{ margin: '0 .25em 0 .25em' }}>Facebook</Button>
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