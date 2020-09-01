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
          heading='About us'
          buttonRounded={false}
          imageSrc={AtImg}
        />
        <MainFeature1
          heading='Our Mission'
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
