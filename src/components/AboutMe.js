import React, { Component } from 'react';
import WhatCanIdo from './WhatCanIDo';
import { Heading, Section } from 'react-bulma-components/full';

class AboutMe extends React.Component {
    render() {
        return (
            <div id="aboutMe">
                <Heading><b>A little bit about me</b></Heading>
                <p>
                    I am a full-stack web developer who likes creating clean and functional web apps. <br />
                    I graudated from the University of Arkansas with a computer science degree, but I'm a life-long student and love learning new things! <br />
                    I specialize in helping people  :)<br /><br />
                </p>
                <WhatCanIdo />
            </div>
        )
    }
}

export default AboutMe;