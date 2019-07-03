import React, { Component } from 'react';
import { Heading, Container, Card } from 'react-bulma-components/full';

const cardStyle = {
    padding: "1em",
    marginTop: "1em"
}

class Timeline extends React.Component {
    render() {
        return (
            <div id="timeline">
                <Heading><b>Timeline</b></Heading>
                <ul>
                    <Card style={cardStyle}>
                        <li>
                            <Heading size={5}>Ruby on Rails Intern</Heading>
                            <Heading subtitle size={6} style={{ color: "grey" }}>Acorn Influence (Dec. 2018 - Mar. 2019)</Heading><hr />
                            <ul>
                                <li>
                                    - Assisted in designing, implementing, and reviewing new features to better interact with
                                    influencer data in a Ruby on Rails development environment.
                                </li>
                                <li>
                                    - Upgraded the repository to Bootstrap 4.
                                </li>
                            </ul>
                            <br />
                        </li>
                    </Card>
                    <Card style={cardStyle}>
                        <li>
                            <Heading size={5}>Front-End Development Intern</Heading>
                            <Heading subtitle size={6} style={{ color: "grey" }}>The Motley Fool (Jun. 2018 - Aug. 2018)</Heading><hr />
                            <ul>
                                <li>
                                    - Worked with the development team in Scrum to maintain and enhance Django web app by
                                    assisting the implementation of new features.
                                    </li>
                                <li>
                                    - Collaborated across departments to address bugs.
                                    </li>
                                <li>
                                    - Worked on upgrading the repository to Bootstrap 4.
                                    </li>
                            </ul>
                            <br />
                        </li>
                    </Card>
                    <Card style={cardStyle}>
                        <li>
                            <Heading size={5}>Front-End Development Intern</Heading>
                            <Heading subtitle size={6} style={{ color: "grey" }}>WhyteSpyder (May 2017 - Aug. 2017)</Heading><hr />
                            <ul>
                                <li>
                                    - Assisted with website development and customization of themes on WordPress.
                                    </li>
                                <li>
                                    - Built responsive landing pages.
                                    </li>
                            </ul>
                            <br />
                        </li>
                    </Card>
                </ul>
            </div>
        )
    }
}

export default Timeline;