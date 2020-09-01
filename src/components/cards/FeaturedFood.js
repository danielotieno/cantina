import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { SectionHeading } from 'components/misc/Headings.js';
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons.js';
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts.js';
import { ReactComponent as SvgDecoratorBlob1 } from 'images/svg-decorator-blob-5.svg';
import { ReactComponent as SvgDecoratorBlob2 } from 'images/svg-decorator-blob-7.svg';

const Heading = tw(SectionHeading)``;

const CardContainer = tw.div`mt-10 w-full inline-block sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;

const TabContent = tw(
  motion.div,
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;

const Card = tw(
  motion.a,
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;

const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url('${props.imageSrc}');
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;

const ButtonContainer = tw.div`flex justify-center mt-6`;

const AllButton = tw.button`inline-block rounded justify-center items-center font-bold  px-8 lg:px-10 py-3 rounded bg-orange-600 text-gray-100 hocus:bg-orange-800 focus:shadow-outline focus:outline-none transition duration-300 `;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default () => {
  const food = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Veg Mixer',
      content: 'Tomato Salad & Carrot',
      url: 'https://youtu.be/BXCX-Lx3MNE',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Macaroni',
      content: 'Cheese Pizza',
      url: 'https://youtu.be/BXCX-Lx3MNE',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Nelli',
      content: 'Hamburger & Fries',
      url: 'https://youtu.be/BXCX-Lx3MNE',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Jalapeno Poppers',
      content: 'Crispy Soyabeans',
      url: 'https://youtu.be/BXCX-Lx3MNE',
    },
  ];
  return (
    <Container>
      <ContentWithPaddingXl>
        <Heading>Food Vlog</Heading>
        <TabContent
          variants={{
            current: {
              opacity: 1,
              scale: 1,
              display: 'flex',
            },
            hidden: {
              opacity: 0,
              scale: 0.8,
              display: 'none',
            },
          }}
          transition={{ duration: 0.4 }}>
          {food.map((card, index) => (
            <CardContainer key={index}>
              <Card
                className='group'
                href={card.url}
                initial='rest'
                whileHover='hover'
                animate='rest'>
                <CardImageContainer imageSrc={card.imageSrc}>
                  <CardHoverOverlay
                    variants={{
                      hover: {
                        opacity: 1,
                        height: 'auto',
                      },
                      rest: {
                        opacity: 0,
                        height: 0,
                      },
                    }}
                    transition={{ duration: 0.3 }}>
                    <CardButton>Watch Now</CardButton>
                  </CardHoverOverlay>
                </CardImageContainer>
                <CardText>
                  <CardTitle>{card.title}</CardTitle>
                  <CardContent>{card.content}</CardContent>
                </CardText>
              </Card>
            </CardContainer>
          ))}
        </TabContent>
        <ButtonContainer>
          <AllButton>
            <Link to='/food'>Explore All Food Vlogs</Link>
          </AllButton>
        </ButtonContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
