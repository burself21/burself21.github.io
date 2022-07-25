import React from 'react';
import Typewriter from 'typewriter-effect';
import Container from 'react-bootstrap/Container';

function Intro(props) {
    let typewriter = new Typewriter();
    return (
        <Container id='typewriter-container'>
            <Typewriter
                id="bob"
                onInit={(typewriter) => {
                    typewriter.changeDelay(50)
                        .typeString("<span id='my-typewriter'>Hi, I'm Nathan Johns...</span>")
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        
                        .start();
                }}
            />
        </Container>
    );
}

export default Intro;