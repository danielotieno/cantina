import React from 'react';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import Hero from 'components/hero/TwoColumnWithVideo.js';

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

  const imageCss = tw`rounded-4xl`;

  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Delicious & Affordable{' '}
            <HighlightedText>Meals Near You.</HighlightedText>
          </>
        }
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        imageSrc='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80'
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText='Explore'
        watchVideoButtonText='Meet David The Chef'
      />
    </AnimationRevealPage>
  );
};
