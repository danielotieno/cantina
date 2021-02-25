import 'tailwindcss/dist/base.css';
import 'styles/globalStyles.css';
import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { css } from 'styled-components/macro'; //eslint-disable-line
import Home from 'pages/Home';
import AboutUs from 'pages/AboutUs';
import Tours from 'pages/Tours';
import Food from 'pages/Food';
import FoodDetail from 'pages/FoodDetail';
import ContactUs from 'pages/ContactUs';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <ScrollToTop smooth />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about-us' component={AboutUs} />
        <Route exact path='/tours' component={Tours} />
        <Route exact path='/food-videos' component={Food} />
        <Route exact path='/contact-us' component={ContactUs} />
        <Route exact path='/food-details' component={FoodDetail} />
      </Switch>
    </Router>
  );
}
