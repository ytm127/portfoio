import React from 'react';
import { Heading, Button } from 'react-bulma-components/full';

const imageURL = 'images/withMom.jpg';

const bodyStyle = {
    backgroundImage: 'url(' + imageURL + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 25%',
    padding: '2rem',
    height: '68%'
}



class Intro extends React.Component {
    render() {
        return (
            <div id="intro" style={bodyStyle}>
                <div style={{ marginTop: '8em' }}>
                    <Heading size={2}>
                        <b>Hello there!</b> <br />
                    </Heading>
                    <Heading>Fullstack web developer / life-long learner / problem solver</Heading>
                    <Button size="medium" outlined rounded color="info">Resume</Button>
                </div>
            </div>
        )
    }
}

export default Intro;