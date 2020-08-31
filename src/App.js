import 'tailwindcss/dist/base.css';
import 'styles/globalStyles.css';
import React from 'react';
import { css } from 'styled-components/macro'; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage';
import HeroSecton from 'components/hsection/HeroSection';
import FeaturedCities from 'components/cards/FeaturedCities';
import FeaturedFood from 'components/cards/FeaturedFood';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <AnimationRevealPage>
      <HeroSecton />
      <FeaturedCities />
      <FeaturedFood />
    </AnimationRevealPage>
  );
}
