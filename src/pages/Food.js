import React from 'react';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import tw from 'twin.macro';
import styled from 'styled-components'; //eslint-disable-line
import { css } from 'styled-components/macro'; //eslint-disable-line
import Header from 'components/headers/light.js';
import TabGrid from 'components/cards/TabCardGrid.js';

import MiniCenteredFooter from 'components/footers/MiniCenteredFooter';

export default () => {
  const HighlightedText = tw.span`bg-orange-900 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  return (
    <>
      <AnimationRevealPage>
        <Header />
        <TabGrid
          heading={
            <>
              How to cook <HighlightedText>Videos</HighlightedText>
            </>
          }
        />
      </AnimationRevealPage>

      <MiniCenteredFooter />
    </>
  );
};
