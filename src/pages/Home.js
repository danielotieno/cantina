import React from 'react';
import HeroSecton from 'components/hsection/HeroSection';
import FeaturedCities from 'components/cards/FeaturedCities';
import FeaturedFood from 'components/cards/FeaturedFood';
import InstagramFeed from 'components/cards/InstgramFeed';
import MiniCenteredFooter from 'components/footers/MiniCenteredFooter';

export default () => {
  return (
    <>
      <HeroSecton />
      <FeaturedCities />
      <FeaturedFood />
      <InstagramFeed />
      <MiniCenteredFooter />
    </>
  );
};
