// import FeaturedCities from 'components/cards/FeaturedCities';
import FeaturedFood from 'components/cards/FeaturedFood';
import InstagramFeed from 'components/cards/InstagramFeed';
import MiniCenteredFooter from 'components/footers/MiniCenteredFooter';
import HeroSecton from 'components/hsection/HeroSection';
import React from 'react';

const Home = () => {
  return (
    <>
      <HeroSecton />
      {/* <FeaturedCities /> */}
      <FeaturedFood />
      <InstagramFeed />
      <MiniCenteredFooter />
    </>
  );
};

export default Home;
