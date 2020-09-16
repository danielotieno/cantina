import React from 'react';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import { css } from 'styled-components/macro'; //eslint-disable-line
import Header from 'components/headers/light.js';
import MainFeature1 from 'components/features/TwoColWithButton.js';

import Features from 'components/features/ThreeColSimple.js';
import TeamCardGrid from 'components/cards/ProfileThreeColGrid.js';
import MiniCenteredFooter from 'components/footers/MiniCenteredFooter';
import AtImg from '../images/at.jpg';
import AttImg from '../images/att.jpg';

export default () => {
  return (
    <>
      <AnimationRevealPage>
        <Header />
        <MainFeature1
          heading='About'
          description='David, an amateur chef, venturer, traveller, and last but not least a legend in the making. I grew up on the emerald isle of Ireland and I loved everything about food and travel. Growing up on a family farm, I loved nothing more than to be covered from head to toe in cow dung and learning to drive a tractor. At an early age, I worked as a butcher boy part-time between to learn all he could about meat and where the different cuts came from a carcass. As the years went on David’s love for passionately grew in food and learning from food people alike on YouTube. Embracing new cultures, countries and food. My goal is to share with you and make you smile and laugh along the way. Dave’s Cantina is where it’s all happening – tune in!'
          buttonRounded={false}
          imageSrc={AtImg}
        />
        <MainFeature1
          heading='Our Mission'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          buttonRounded={false}
          imageSrc={AttImg}
          textOnLeft={false}
        />
        <Features
          heading='Our Vision'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          linkText=''
        />
        <TeamCardGrid />
      </AnimationRevealPage>
      <MiniCenteredFooter />
    </>
  );
};
