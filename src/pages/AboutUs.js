import TeamCardGrid from 'components/cards/ProfileThreeColGrid.js';
import Features from 'components/features/ThreeColSimple.js';
import MainFeature1 from 'components/features/TwoColWithButton.js';
import MiniCenteredFooter from 'components/footers/MiniCenteredFooter';
import Header from 'components/headers/light.js';
import React from 'react';
import AbtImg from '../images/abt-img.jpg';
import MissionImg from '../images/mission-img.jpg';

const AboutUs = () => {
  return (
    <>
      <Header />
      <MainFeature1
        heading='About'
        description='David, an amateur chef, venturer, traveller, and last but not least a legend in the making. I grew up on the emerald isle of Ireland and I loved everything about food and travel. Growing up on a family farm, I loved nothing more than to be covered from head to toe in cow dung and learning to drive a tractor. At an early age, I worked as a butcher boy part-time between to learn all he could about meat and where the different cuts came from a carcass. As the years went on David’s love for passionately grew in food and learning from food people alike on YouTube. Embracing new cultures, countries and food. My goal is to share with you and make you smile and laugh along the way.'
        buttonRounded={false}
        imageSrc={AbtImg}
      />
      <MainFeature1
        heading='Our Mission'
        description="At Dave’s Cantina, we're on a mission to deliver not only excellent food tour and convivial places tour videos but also inspire communities by connecting people with amazing experiences while supporting local vendors. We believe a life outdoors is a life well-lived."
        buttonRounded={false}
        imageSrc={MissionImg}
        textOnLeft={false}
      />
      <Features
        heading='Our Vision'
        description='To give our viewers the most compelling food, travel and life tour experience’s as possible.'
        linkText=''
      />
      <TeamCardGrid />
      <MiniCenteredFooter />
    </>
  );
};

export default AboutUs;
