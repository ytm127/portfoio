import React, { Component } from 'react';
import { Heading, Columns, Card } from 'react-bulma-components/full';
import SkillsCard from './SkillsCard';

// styles
const center = {
    textAlign: 'center'
};

const card1 = {
    title: "Web Development",
    data: "information about web development"
};

const card2 = {
    title: "Data Structure and Algorithms",
    data: "information about cs and ds and algo"
};

const card3 = {
    title: "Software Engineering",
    data: "information about software and rest and stuff rest api mvc all that good stuff that makes me awesome"
};


class WhatCanIdo extends React.Component {
    render() {
        return (
            <div>
                <Heading>What can I do?</Heading>
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