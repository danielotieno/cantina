import React from 'react';
import HeroSecton from 'components/hsection/HeroSection';
import FeaturedCities from 'components/cards/FeaturedCities';
import FeaturedFood from 'components/cards/FeaturedFood';
import InstagramFeed from 'components/cards/InstgramFeed';
import MiniCenteredFooter from 'components/footers/MiniCenteredFooter';
import Blog from 'components/hero/ThreeColSimpleWithImage.js';

export default () => {
  return (
    <>
      <HeroSecton />
      <Blog />
      <FeaturedFood />
      <InstagramFeed />
      <MiniCenteredFooter />
    </>
  );
};
