import React, { useState, useLayoutEffect } from 'react';

import styles from './ScrollButton.module.css';


const scroll = (event) => {
    event.preventDefault();
    document.getElementById('project-container').scrollIntoView({
        behavior: "smooth"
    })
}

const ScrollButton = (props) => {
    return (
        <section id={styles.scroll_section} className={styles.demo}>
            <a href="#" id={styles.text} onClick={scroll} style={{scrollBehavior: "smooth"}}><span></span>{props.text}</a>
        </section>
    );
}

export default ScrollButton;