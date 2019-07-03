import React, { Component } from 'react';
import { Heading, Columns, Card } from 'react-bulma-components/full';
import SkillsCard from './SkillsCard';

// styles
const center = {
    textAlign: 'center'
};

const card1 = {
    title: "Web Development",
    data: "I love creating clean and functional websites and web apps. Right now, I enjoy using Javascript, React, Bootstrap, and Bulma. ",
    color: '#70C1B3'
};

const card2 = {
    title: "Data Structure and Algorithms",
    data: "Coming from a computer science background in college, I have a great grasp on DSA and multiple tech paradigms and concepts.",
    color: '#FFE066'
};

const card3 = {
    title: "Software Engineering",
    data: "I also have experience creating fully fleshed out end-to-end software using python, Django/flask, RoR, java, and SQL databases.",
    color: '#247BA0'
};


class WhatCanIdo extends React.Component {
    render() {
        return (
            <div>
                <Heading size={4}>What can I do?</Heading>
                <Columns>
                    <Columns.Column>
                        <SkillsCard cardInfo={card1} />
                    </Columns.Column>
                    <Columns.Column>
                        <SkillsCard cardInfo={card2} />
                    </Columns.Column>
                    <Columns.Column>
                        <SkillsCard cardInfo={card3} />
                    </Columns.Column>
                </Columns>
            </div>
        );
    }
}

export default WhatCanIdo;