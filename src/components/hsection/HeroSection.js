import React from 'react';
import Typical from 'react-typical';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import Hero from 'components/hero/TwoColumnWithVideo.js';

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-6 inline-block`;

  const imageCss = tw`rounded-4xl`;

  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            <HighlightedText>
              Living the Dream{' '}
              <Typical
                loop={Infinity}
                wrapper='p'
                steps={[
                  'is not a State of Life',
                  1000,
                  'it’s a State of Mind',
                  1000,
                ]}
              />
            </HighlightedText>
          </>
        }
        description='Laughter is brightest where food is best.'
        imageSrc='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80'
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText='Explore'
        watchVideoButtonText='Meet David The Chef'
      />
    </AnimationRevealPage>
  );
};
