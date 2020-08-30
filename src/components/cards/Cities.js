import React, { useState } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SectionHeading } from 'components/misc/Headings';
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons';
import { ReactComponent as LocationIcon } from 'feather-icons/dist/icons/map-pin.svg';
import ResponsiveVideoEmbed from 'helpers/ResponsiveVideoEmbed';
import { ReactComponent as PlayIcon } from 'feather-icons/dist/icons/play-circle.svg';
import { ReactComponent as CloseIcon } from 'feather-icons/dist/icons/x.svg';
import ReactModalAdapter from '../../helpers/ReactModalAdapter.js';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto `;

const Heading = tw(SectionHeading)`py-5`;

const WatchVideoButton = styled.button`
  ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-gray-100 transition duration-300 hocus:text-orange-500 focus:outline-none`}
  .playIcon {
    ${tw`stroke-1 w-12 h-12`}
  }
  .playText {
    ${tw`ml-2 font-black text-lg`}
  }
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

const Card = tw.div`h-full flex! flex-col inline-block justify-center items-center mr-8 mb-3 sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`,
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(
  PrimaryButtonBase,
)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-3xl py-2 sm:py-4`;

const AllButton = tw.button`inline-block justify-center items-center font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300 `;

export default () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const cards = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
      title: 'Mombasa',
      description:
        'Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.',
      locationText: 'Mombasa, Kenya',
      watchVideoYoutubeUrl: 'https://www.youtube.com/embed/zdJMReSUIos',
      watchVideoButtonText: 'Watch Now!',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
      title: 'Malindi',
      description:
        'Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.',
      locationText: 'Kilifi, Kenya',
      watchVideoYoutubeUrl: 'https://www.youtube.com/embed/zdJMReSUIos',
      watchVideoButtonText: 'Watch Now!',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
      title: 'Wasini Island',
      description:
        'Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.',
      locationText: 'Kwale, Kenya',
      watchVideoYoutubeUrl: 'https://www.youtube.com/embed/zdJMReSUIos',
      watchVideoButtonText: 'Watch Now!',
    },
  ];
  return (
    <Container>
      <Content>
        <Heading>Featured Tours</Heading>
        {cards.map((card, index) => (
          <Card key={index}>
            <CardImage imageSrc={card.imageSrc} />
            <TextInfo>
              <TitleReviewContainer>
                <Title>{card.title}</Title>
              </TitleReviewContainer>
              <SecondaryInfoContainer>
                <IconWithText>
                  <IconContainer>
                    <LocationIcon />
                  </IconContainer>
                  <Text>{card.locationText}</Text>
                </IconWithText>
              </SecondaryInfoContainer>
              <Description>{card.description}</Description>
            </TextInfo>
            <PrimaryButton>
              <WatchVideoButton onClick={toggleModal}>
                <span className='playIconContainer'>
                  <PlayIcon className='playIcon' />
                </span>
                <span className='playText'>{card.watchVideoButtonText}</span>
              </WatchVideoButton>
            </PrimaryButton>
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
                <ResponsiveVideoEmbed
                  url={card.watchVideoYoutubeUrl}
                  tw='w-full'
                />
              </div>
            </StyledModal>
          </Card>
        ))}
        <AllButton as='a' href='#'>
          Explore All Tours
        </AllButton>
      </Content>
    </Container>
  );
};
