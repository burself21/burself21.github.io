import React from 'react';
import MyNavbar from '../Components/MyNavbar';
import MyNavbar2 from '../Components/MyNavbar2';
import About from '../Components/Home/About';
import Intro from '../Components/Intro/Intro';
import ProjectContainer from '../Containers/Projects/ProjectContainer';
import ProgressBar from 'react-bootstrap/ProgressBar';


function Home() {
    const progress = 20; // out of 100

    return (
        <div id="home-main">
            {/*<MyNavbar2
                page="Home"
            /> */}
            {/*<section id='progress'>
                <div class='col-lg-8 col-md-8 col-sm-8 col-xs-8 offset-2'>
                    <h2 class='my-section-header'>Progress</h2>
                    <ProgressBar now={progress} label={`${progress}%`} />
                </div>
            </section> */}
            {/*<About /> */}
            <Intro />
            <ProjectContainer />
        </div>
    );
}

export default Home;