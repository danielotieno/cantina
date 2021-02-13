import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { SectionHeading } from 'components/misc/Headings.js';
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons.js';
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts.js';
import { ReactComponent as SvgDecoratorBlob1 } from 'images/svg-decorator-blob-5.svg';
import { ReactComponent as SvgDecoratorBlob2 } from 'images/svg-decorator-blob-7.svg';
import PizzaDough from 'images/pizza-dough.jpeg';
import SmokedChicken from 'images/chick.jpg';
import ChocolateBrownies from 'images/choco.jpg';

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
  ${tw`relative h-56 bg-center bg-cover rounded-t xl:h-64`}
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex items-center justify-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;

const ButtonContainer = tw.div`flex justify-center mt-6`;

const AllButton = tw.button`inline-block rounded justify-center items-center font-bold  px-8 lg:px-10 py-3 rounded bg-orange-600 text-gray-100 hocus:bg-orange-700 focus:shadow-outline focus:outline-none transition duration-300 `;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`absolute top-0 right-0 w-64 h-64 text-pink-400 transform -translate-y-12 pointer-events-none -z-20 opacity-15 translate-x-2/3`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`absolute bottom-0 left-0 transform pointer-events-none -z-20 h-80 w-80 opacity-15 -translate-x-2/3 text-primary-500`}
`;

export default () => {
  const food = [
    {
      imageSrc: PizzaDough,
      title: 'Pizza Dough',
      url: 'https://youtu.be/5ay-XRxkdE0',
    },
    {
      imageSrc: SmokedChicken,
      title: 'Smoked Chicken',
      url: 'https://youtu.be/b2A7np1vTL8',
    },
    {
      imageSrc: ChocolateBrownies,
      title: 'Chocolate Brownies',
      url: 'https://youtu.be/KH4FvGqIfy8',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Crispy Soyabeans',
      url: 'https://youtu.be/5ay-XRxkdE0',
    },
  ];
  return (
    <Container>
      <ContentWithPaddingXl>
        <Heading>How To Cook Videos</Heading>
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
              <ExternalLink href={card.url}>
                <Card
                  className='group'
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
                  </CardText>
                </Card>
              </ExternalLink>
            </CardContainer>
          ))}
        </TabContent>
        <ButtonContainer>
          <AllButton>
            <Link to='/food'>Explore All Videos</Link>
          </AllButton>
        </ButtonContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
