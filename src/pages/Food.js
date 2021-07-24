import TabGrid from 'components/cards/TabCardGrid.js';
import MiniCenteredFooter from 'components/footers/MiniCenteredFooter';
import Header from 'components/headers/light.js';
import React from 'react';
import tw from 'twin.macro';

const Food = () => {
  const HighlightedText = tw.span`bg-orange-900 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  return (
    <>
      <Header />
      <TabGrid
        heading={
          <>
            How To Cook <HighlightedText>Videos</HighlightedText>
          </>
        }
      />

      <MiniCenteredFooter />
    </>
  );
};

export default Food;
