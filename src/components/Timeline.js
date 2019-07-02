import React, { Component } from 'react';
import { Heading } from 'react-bulma-components/full';

class Timeline extends React.Component {
    render() {
        return (
            <div id="timeline">
                <Heading>I am the timeline component</Heading>
                <p>
                    Remember the component folder which we created under src directory in the previous step, now we will break down the HTML template page into components and combine these components to make our React-app.

    First, you need to identify which components you can create from the monolithic HTML file — like header, footer and contact me. You need to be a little creative here!!
    Look for tags like section/div which aren’t nested into some other section/div. These should contain code about that particular section of the page which is independent of other sections. Try looking into my GitHub Repo to get a better idea about this one.
    Hint: Use the ‘inspect element’ tool to play around with the code and take notice of the effect of changes within the browser.
    These pieces of HTML code will be used in the render() method of the component. The render() method will return this code whenever a component gets rendered into the ReactDOM. Take a look at the code blocks given below for reference.
                </p>
            </div>
        )
    }
}

export default Timeline;