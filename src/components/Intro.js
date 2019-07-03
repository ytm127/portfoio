import React from 'react';
import { Heading, Button } from 'react-bulma-components/full';

const imageURL = 'https://github.com/ytm127/portfoio/blob/master/public/images/withMom.JPG?raw=true';

const bodyStyle = {
    backgroundImage: 'url(' + imageURL + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10% 25%',
    backgroundSize: 'cover',
    padding: '2rem',
    height: '35%'
}

const fontStyle = {
    fontFamily: 'DM Serif Display serif'
};



class Intro extends React.Component {
    render() {
        return (
            <div id="intro" style={bodyStyle}>
                <div style={{ marginTop: '8em' }}>
                    <Heading size={1}>
                        <b style={fontStyle}>Hello there!</b> <br />
                    </Heading>
                    <Heading style={fontStyle}>Fullstack web developer / life-long learner / problem solver</Heading>
                    <Button
                        size="medium" outlined rounded color="info"
                        renderAs="a" href="https://www.slideshare.net/slideshow/embed_code/key/L4t14QEGcpLPDE">
                        Resume
                    </Button>
                </div>
            </div>
        )
    }
}

export default Intro;