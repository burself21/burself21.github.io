import React, { useState } from 'react';
import Project from '../../Components/Project/Project';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import styles from './ProjectContainer.module.css'

import Projects from './Projects';

const ProjectContainer = props => {
    
    const header = <h1 id={styles.header}> Projects </h1>;
    const num_projects = Projects.length;

    if (num_projects === 0) {
        return (
            <Container className='p-3 project-container-main' id="project-container">
                {header} <br />
                <h5> Sorry. At this moment, Nathan does not have any notable projects :( </h5>
            </Container>
        )
    }
    else {
        return (
            <Container className={styles.project_container} id="project-container">
                {header}
                <Grid container spacing={6}>
                    {/** change Array.slice(0) to Array */}
                    {Array.from(Array(num_projects).keys()).map(id => 
                        <Grid item key={id} xs={12} sm={6}>
                                <Project
                                    {...Projects[id]}
                                />
                        </Grid> 
                    )}
                </Grid>
            </Container>
        )
    }
}

export default ProjectContainer;