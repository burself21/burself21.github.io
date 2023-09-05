import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createTheme } from '@material-ui/core/styles';

import bground7 from './bground7.jpg';

const useStyles = makeStyles(theme => ({

    media: {
        height: 220,
        width: "100%"
    },

    header: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "22px",
          }
    },
    

    content: {
        paddingBottom: "16px!important"
    },

    description: {
        marginBottom: "12px",
        height: "75px",
        overflowY: "hidden",
        [theme.breakpoints.down('sm')]: {
            display: "none",
        }

    },

    button_container: {
        marginTop: "6px",

        '& > a:first-of-type': {
            marginLeft: "-6px"
        }
    },

    techs: {
        marginTop: "5px",
        '& > img:not(:last-of-type)': {
            marginRight: "20px"
        },
        [theme.breakpoints.between('sm', 'md')]: {
            display: "none",
          }
    },

    tech_header: {
        [theme.breakpoints.between('sm', 'md')]: {
            display: "none",
          }
    },

    tech_container: {
    },


}));

const Project = (props) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea href={props.site} target="_blank">
                <CardMedia
                    className={classes.media}
                    image={props.img || bground7}
                    title={props.name}
                />
            </CardActionArea>
                <CardContent className={classes.content}>
                    <Typography variant="h4" gutterBottom className={classes.header} align="center">
                        {props.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" className={classes.description}>
                        {props.desc}
                    </Typography>
                    <div className={classes.tech_container}>
                        <Typography variant="h6" className={classes.tech_header}>
                            Technologies:
                        </Typography>
                        <div className={classes.techs}>
                            {props.techs && [...Array(props.techs.length).keys()].map(id => 
                                <Tooltip
                                    title={props.techs[id].name}
                                    aria-label={props.techs[id].name}
                                    key={id}
                                    leaveTouchDelay={4000}
                                    enterTouchDelay={0}
                                    enterNextDelay={340}
                                >
                                    <img src={props.techs[id].icon} width="48px" height="48px" style={{ marginBottom: 5 }}/>

                                </Tooltip>
                            )}
                        </div>
                        
                    </div>
                    <div className={classes.button_container}>
                        <Typography variant="h6" className={classes.button_header}>
                            View:
                        </Typography>
                        <Button color="primary" href={props.site} target="_blank">
                            Project
                        </Button>
                        <Button color="primary" href={props.source} target="_blank">
                            Source
                        </Button>
                    </div> 
                    <div style={{clear: "both"}} />
                    
                </CardContent>
            
        </Card>
    );
}

export default Project;