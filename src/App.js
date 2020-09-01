import 'tailwindcss/dist/base.css';
import 'styles/globalStyles.css';
import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { css } from 'styled-components/macro'; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage';
import Home from 'pages/Home';
import AboutUs from 'pages/AboutUs';
import Tours from 'pages/Tours';
import Food from 'pages/Food';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <AnimationRevealPage>
      <Router>
        <ScrollToTop smooth />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about-us' component={AboutUs} />
          <Route exact path='/tours' component={Tours} />
          <Route exact path='/food' component={Food} />
          <Route exact path='/contact-us' component={AboutUs} />
        </Switch>
      </Router>
    </AnimationRevealPage>
  );
}
