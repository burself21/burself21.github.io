import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Home from './Pages/Home';
import OtherProjects from './Pages/OtherProjects';
import ContactMe from './Pages/ContactMe';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [x, setX] = useState(val1);
  // setX(val2);
  return (
    <Router>
      <div id='app-main'>
        <Switch>
          <Route exact path="/">
            <Helmet>
              <title>Nathan Johns | Home</title>
           </Helmet>
            <Home />
          </Route>
          <Route path="/home">
            <Redirect to="/" />
          </Route>
          <Route path="/other-projects">
            <Helmet>
              <title>Nathan Johns | Other Projects </title>
           </Helmet>
            <OtherProjects />
          </Route>
          <Route path="/contact-me">
            <Helmet>
              <title>Nathan Johns | Contact Me</title>
           </Helmet>
            <ContactMe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
