import React from 'react';
import { Columns, Section } from "react-bulma-components/full";
import Side from './components/Side';
import AboutMe from './components/AboutMe';
import Intro from './components/Intro';
import Timeline from './components/Timeline';
import './App.css';



function App() {
  return (
    <div className="App">
      <Columns gapless>
        <Columns.Column size={3}>
          <Side />
        </Columns.Column>

        <Columns.Column size={9}>
          {/* <div id="page-wrap"> */}
          <Intro />
          <Section>
            <AboutMe />
          </Section>

          <Section>
            <Timeline />
          </Section>
          {/* </div> */}
        </Columns.Column>
      </Columns>
    </div>
  );
}

export default App;
