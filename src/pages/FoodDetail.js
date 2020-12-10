import React, { useState } from 'react';
import { LiteYouTubeEmbed } from 'react-lite-youtube-embed';
import styled from 'styled-components';
import tw from 'twin.macro';
//eslint-disable-next-line
import { css } from 'styled-components/macro';

import Header from '../components/headers/light.js';

import ReactModalAdapter from '../helpers/ReactModalAdapter.js';
import ResponsiveVideoEmbed from '../helpers/ResponsiveVideoEmbed.js';

import { ReactComponent as PlayIcon } from 'feather-icons/dist/icons/play-circle.svg';
import { ReactComponent as CloseIcon } from 'feather-icons/dist/icons/x.svg';
import { ReactComponent as SvgDecoratorBlob1 } from '../images/svg-decorator-blob-1.svg';
import { ReactComponent as SvgDecoratorBlob2 } from '../images/dot-pattern.svg';
import DesignIllustration from '../images/pizza.jpg';

import { ReactComponent as ClockIcon } from 'feather-icons/dist/icons/clock.svg';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;

const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;

const WatchVideoButton = styled.button`
  ${tw`mt-4 sm:mt-0 flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none`}
  .playIcon {
    ${tw`stroke-1 w-12 h-12`}
  }
  .playText {
    ${tw`ml-2 font-medium`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

const Features = tw.div`mx-auto md:mx-0 flex flex-col lg:flex-row max-w-xs lg:max-w-none`;
const Feature = tw.div`mt-10 lg:mt-8 flex items-center md:items-start flex-col md:mr-8 last:mr-0`;

const FeatureHeadingContainer = tw.div`flex items-center`;
const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-primary-500 text-center rounded p-2 flex-shrink-0`}
  ${(props) => [
    props.iconRoundedFull && tw`rounded-full`,
    props.iconFilled && tw`border-0 bg-primary-500 text-gray-100`,
  ]}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const FeatureHeading = tw.div`ml-3 font-bold text-xl`;

export default ({
  heading = 'How to make pizza dough',
  description = 'Making your own pizza base is easier than you think. The great thing about learning how to make pizza dough recipe is that it can be made in advance, and even frozen, so you can dial up a pizza in minutes.',
  watchVideoButtonText = 'Watch Video',
  watchVideoYoutubeUrl = 'https://www.youtube.com/embed/zdJMReSUIos',
  imageSrc = DesignIllustration,
  imageCss = null,
  features = null,
  iconRoundedFull = true,
  iconFilled = true,
  iconContainerCss = null,
  imageDecoratorBlob = false,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const defaultFeatures = [
    {
      Icon: ClockIcon,
      title: 'Preparation: 30 mins',
      iconContainerCss: tw`bg-teal-300 text-teal-800`,
    },
    {
      Icon: ClockIcon,
      title: 'Cooking: 1 to 2 hours',
      iconContainerCss: tw`bg-red-300 text-red-800`,
    },
  ];

  if (!features) features = defaultFeatures;

  return (
    <>
      <Header />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Features>
              {features.map((feature, index) => (
                <Feature key={index}>
                  <FeatureHeadingContainer>
                    <FeatureIconContainer
                      iconFilled={iconFilled}
                      iconRoundedFull={iconRoundedFull}
                      css={feature.iconContainerCss || iconContainerCss}>
                      {<feature.Icon />}
                    </FeatureIconContainer>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                  </FeatureHeadingContainer>
                </Feature>
              ))}
            </Features>
            <Actions>
              <WatchVideoButton onClick={toggleModal}>
                <span className='playIconContainer'>
                  <PlayIcon className='playIcon' />
                </span>
                <span className='playText'>{watchVideoButtonText}</span>
              </WatchVideoButton>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img css={imageCss} src={imageSrc} alt='Hero' />
              {imageDecoratorBlob && <DecoratorBlob2 />}
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <div tw='text-center'>
          <h1 tw='font-black text-2xl leading-snug md:text-4xl mb-10'>
            Things you should know
          </h1>
        </div>
        <div tw='bg-blue-800 pb-4'>
          <div tw='grid md:grid-cols-3 gap-4'>
            <div>
              <h1 tw='uppercase font-black text-white text-xl leading-snug md:text-2xl mb-2 pt-4 pl-8'>
                Ingredients
              </h1>
              <div>
                <ul tw='list-disc list-inside text-white p-3 leading-snug'>
                  <li>400g/14oz strong white flour</li>
                  <li>100g/3½oz semolina, plus extra for dusting</li>
                  <li>2 tsp salt</li>
                  <li>15g/½oz fresh yeast or 1½ tsp of dry yeast</li>
                  <li>275ml/9½fl oz tepid water</li>
                  <li>50ml/2fl oz olive oil, plus extra for oiling</li>
                </ul>
              </div>
            </div>
            <div></div>
            <div tw='mt-6 mx-4 md:mr-8 xl:border-4 rounded-lg'>
              <LiteYouTubeEmbed id='zdJMReSUIos' title='Daves Cantina show' />
            </div>
          </div>
          <div tw='text-center'>
            <h1 tw='uppercase font-black text-white text-xl leading-snug md:text-2xl mb-4 mt-4'>
              Method
            </h1>
            <div>
              <ul tw='list-decimal list-inside text-white p-3 leading-snug'>
                <li>
                  In a large mixing bowl, stir together the flour, semolina and
                  salt. Stir in the dried yeast (or crumble in the fresh yeast).
                  Make a well in the centre of the flour mixture and pour in
                  most of the water along with the olive oil. Bring the dough
                  together with your hands or a wooden spoon. As the flour is
                  incorporated, the dough will start to take shape. Add the
                  remaining water if the dough feels tight or hard.
                </li>
                <li>
                  Turn the dough out onto a clean surface and knead for 10
                  minutes, or until it is smooth and elastic. Cut off a small
                  piece of the dough and stretch part of it as thinly as you
                  can. If you can see the shadow of your fingers through the
                  dough (the light should shine through the dough like a window
                  pane) without it tearing, it is ready to prove.
                </li>
                <li>
                  Knead the cut piece back into the dough and shape the dough
                  into an even ball. Place in an oiled bowl, cover with a damp
                  tea towel and allow to prove in a warm place for 1–1½ hours,
                  or until it has doubled in size (the temperature of your
                  kitchen can affect the timing of this).
                </li>
                <li>
                  When the dough has risen, take it out of the bowl and knock
                  the air out. Divide the dough into two equal portions, and
                  shape each portion into a ball. Cover with a damp cloth and
                  allow to prove again for about 15 minutes.
                </li>
                <li>
                  Place a pizza stone or an upturned baking tray into the oven
                  and preheat to its highest setting.
                </li>
                <li>
                  Dust the work surface liberally with semolina. Roll out one
                  piece of the dough to form a circle that will fit on your
                  pizza stone or baking tray.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <DecoratorBlob1 />
        <StyledModal
          closeTimeoutMS={300}
          className='mainHeroModal'
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}>
          <CloseModalButton onClick={toggleModal}>
            <CloseIcon tw='w-6 h-6' />
          </CloseModalButton>
          <div className='content'>
            <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} tw='w-full' />
          </div>
        </StyledModal>
      </Container>
    </>
  );
};
