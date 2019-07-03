import React, { Component } from 'react';
import { Card, Heading } from 'react-bulma-components/full';

// styles
const cardStyle = {
    textAlign: 'center',
    padding: '10px'
}

class SkillsCard extends React.Component {
    render() {
        return (
            <div>
                <Card style={{ borderBottom: `solid .5em ${this.props.cardInfo.color}` }}>
                    <Heading size={6} style={{ textAlign: 'center' }}><br />{this.props.cardInfo.title}</Heading><hr />
                    <p style={cardStyle}>{this.props.cardInfo.data}</p><br />
                </Card>
            </div>
        )
    }
}

export default SkillsCard;