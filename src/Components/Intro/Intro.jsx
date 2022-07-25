import React from 'react';

import styles from './Intro.module.css';

import ScrollButton from '../ScrollButton/ScrollButton';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import gh_logo from './gh_logo.png';
import linkedin_logo from './linkedin_logo.png';

import smoothscroll from 'smoothscroll-polyfill';

const useStyles = makeStyles(theme => ({
    header: {
        color: "white",
        fontFamily: "'Josefin Sans', sans-serif",
        fontWeight: 400,
        
        fontSize: "calc(19.09px + 3.4vw)",
        
        ['@media (min-width:1200px)']: {
            fontSize: "60px",
        },
    },

    icon_button: {
        padding: 0,
        
        '& img': {
            width: "80%",
            height: "80%"
        },

        ['@media (min-width:320px)']: {
            width: "11.428vw",
            height: "11.428vw",
            '&:first-of-type': {
                marginRight: "3.472vw"
            }
        },

        ['@media (min-width: 700px)']: {
            height: "80px",
            width: "80px",
        },

        ['@media (min-width:1440px)']: {
            '&:first-of-type': {
                marginRight: "50px"
            }
        }
    }
}));

const Intro = () => {

    const classes = useStyles();
    smoothscroll.polyfill();

    return (
        <div id={styles.container}>
            <div id={styles.mask}>
            </div>
            <div id={styles.overlay}>
                <Typography variant="h2" className={classes.header}>
                    Hi, I'm Nathan Johns
                </Typography>
                <div id={styles.icons}>
                    <IconButton href="https://github.com/burself21" className={classes.icon_button} target="_blank">
                        <img src={gh_logo} alt="" />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/nathan-johns-6b421b162" className={classes.icon_button} target="_blank">
                        <img src={linkedin_logo} alt="" />
                    </IconButton>
                </div>
                <ScrollButton text="Take a look at my projects" />
                <div style={{height: "60px", zIndex: "-1000"}}> 
                </div> 
            </div>
        </div>
    )
}

export default Intro;