// import React, { Component } from 'react';
// import { Heading, Button, Columns, Image } from 'react-bulma-components/full';
// import { slide as Menu } from "react-burger-menu";
// import '../../src/Side.css';

// // styles
// const center = {
//     textAlign: 'center'
// };

// const componentStyle = {
//     // backgroundColor: '#dbffdf',
//     backgroundColor: '#f5faff',
//     padding: '1.5rem',
//     height: '140%',
// };

// const imageStyle = {
//     width: '65%',
//     display: 'block',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     borderRadius: '50%'
// };

// const fontStyle = {
//     fontFamily: 'DM Serif Display serif'
// };



// class Side extends React.Component {


//     render() {
//         return (
//             <div className="sideBar" style={componentStyle}>

//                 {/* mobile menu */}
//                 <div id="mobile">
//                     <Menu>
//                         <div id="profilePic">
//                             <img style={imageStyle} src='https://github.com/ytm127/portfoio/blob/master/public/images/profile.JPG?raw=true' /><br />
//                         </div>
//                         <p style={center}>
//                             tym479@gmail.com <br />
//                             479.925.8596 <br /><br />
//                         </p>
//                         <a className="menu-item" href="/">Intro</a>

//                         <a className="menu-item" href="/burgers">About me</a>

//                         <a className="menu-item" href="/pizzas">Timeline</a>

//                     </Menu>
//                 </div>


//                 {/* normal sidebar menu */}
//                 <div className="sideContent" id="big" style={{ position: 'sticky', top: '3em' }}>
//                     <Heading style={center, fontStyle} size='2'>Yutaro Thomas Morita</Heading>
//                 <hr />
//                 <div id="profilePic">
//                     <img style={imageStyle} src='https://github.com/ytm127/portfoio/blob/master/public/images/profile.JPG?raw=true' /><br />
//                 </div>
//                 <p style={center}>
//                     tym479@gmail.com <br />
//                     479.925.8596 <br /><br />
//                 </p>
//                 <div style={center}>
//                     <Button renderAs="a" href="https://github.com/ytm127/" rounded style={{ margin: '0 .25em .25em .25em' }}>Github</Button>
//                     <Button renderAs="a" href="https://www.linkedin.com/in/thomasmorita/" rounded style={{ margin: '0 .25em .25em .25em' }}>Linkedin</Button>
//                     <Button renderAs="a" href="https://www.facebook.com/thomas.morita" rounded style={{ margin: '0 .25em .25em .25em' }}>Facebook</Button>
//                 </div>
//                 <br />
//                 <div class="menu sticky" style={{ textAlign: 'center' }}>
//                     <p class="menu-label"><b>Quick Links</b></p>
//                     <ul id="menu" class="menu-list">
//                         <li><a href="#intro">Intro</a></li>
//                         <li><a href="#aboutMe">About me</a></li>
//                         <li><a href="#timeline">Timeline</a></li>
//                     </ul>
//                 </div>

//             </div>
//             </div >
//         )
//     }
// }

// export default Side;

















import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";
import { Heading, Button } from 'react-bulma-components/full';
import '../../src/Side.css';

const sideBarStyle = {
    height: '100%',
    backgroundColor: 'grey',
    padding: '1em',

}

// styles
const center = {
    textAlign: 'center'
};

const componentStyle = {
    backgroundColor: '#f5faff',
    padding: '1.5rem',
    // THE HEIGHT HERE DETERMINES THE HEIGHT OF THE ENTIRE WEB PAGE KEEP THIS IN MIND FOR OTHER PERCENTAGE ATTRIBUTES
    height: '2300px'
};

const imageStyle = {
    width: '65%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '50%'
};

const titleStyle = {
    fontFamily: 'DM Serif Display serif',
    textAlign: 'center'
};


class Side extends React.Component {
    render() {
        return (
            <div>
                {/* for mobile viewing  */}
                <div id="mobile">
                    <Menu>
                        <div id="profilePic">
                            <img style={imageStyle} src='https://github.com/ytm127/portfoio/blob/master/public/images/profile.JPG?raw=true' /><br />
                        </div>
                        <p style={center}>
                            tym479@gmail.com <br />
                            479.925.8596 <br /><br />
                        </p>
                        <div style={center}>
                            <Button renderAs="a" href="https://github.com/ytm127/" rounded style={{ margin: '0 .25em .25em .25em' }}>Github</Button>
                            <Button renderAs="a" href="https://www.linkedin.com/in/thomasmorita/" rounded style={{ margin: '0 .25em .25em .25em' }}>Linkedin</Button>
                            <Button renderAs="a" href="https://www.facebook.com/thomas.morita" rounded style={{ margin: '0 .25em .25em .25em' }}>Facebook</Button>
                        </div>
                        <p class="menu-label" style={center}><b>Quick Links</b></p>
                        <a className="menu-item" href="#intro" style={center}>Intro</a>

                        <a className="menu-item" href="#aboutMe" style={center}>About me</a>

                        <a className="menu-item" href="#timeline" style={center}>Timeline</a>

                    </Menu>
                </div>

                {/* for normal viewing */}
                <div id="big">
                    <div className="sideBar" style={componentStyle}>
                        <div className="sideContent" style={{ position: 'sticky', top: '2em' }}>
                            <Heading style={titleStyle} size='2'>Yutaro Thomas Morita</Heading>
                            <hr />
                            <div id="profilePic">
                                <img style={imageStyle} src='https://github.com/ytm127/portfoio/blob/master/public/images/profile.JPG?raw=true' /><br />
                            </div>
                            <p style={center}>
                                tym479@gmail.com <br />
                                479.925.8596 <br /><br />
                            </p>
                            <div style={center}>
                                <Button renderAs="a" href="https://github.com/ytm127/" rounded style={{ margin: '0 .25em .25em .25em' }}>Github</Button>
                                <Button renderAs="a" href="https://www.linkedin.com/in/thomasmorita/" rounded style={{ margin: '0 .25em .25em .25em' }}>Linkedin</Button>
                                <Button renderAs="a" href="https://www.facebook.com/thomas.morita" rounded style={{ margin: '0 .25em .25em .25em' }}>Facebook</Button>
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
                </div>
            </div >
        )
    }
}

export default Side;

