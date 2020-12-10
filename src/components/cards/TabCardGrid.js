import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts.js';
import { SectionHeading } from 'components/misc/Headings.js';
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons.js';
import { ReactComponent as SvgDecoratorBlob1 } from 'images/svg-decorator-blob-5.svg';
import { ReactComponent as SvgDecoratorBlob2 } from 'images/svg-decorator-blob-7.svg';

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-orange-900! text-gray-100!`}
  }
`;

const TabContent = tw(
  motion.div,
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
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
  ${tw`absolute inset-0 inline-block justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = 'Checkout the Videos',
  tabs = {
    Starters: [
      {
        imageSrc:
          'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        title: 'Veg Mixer',
        content: 'Tomato Salad & Carrot',
        url: '/food-details',
      },
      {
        imageSrc:
          'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        title: 'Macaroni',
        content: 'Cheese Pizza',
        url: '/food-details',
      },
      {
        imageSrc:
          'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        title: 'Nelli',
        content: 'Hamburger & Fries',
        url: '/food-details',
      },
      {
        imageSrc:
          'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        title: 'Jalapeno Poppers',
        content: 'Crispy Soyabeans',
        url: '/food-details',
      },
      {
        imageSrc:
          'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        title: 'Cajun Chicken',
        content: 'Roasted Chicken & Egg',
        url: '/food-details',
      },
      {
        imageSrc:
          'https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        title: 'Chillie Cake',
        content: 'Deepfried Chicken',
        url: '/food-details',
      },
      {
        imageSrc:
          'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        title: 'Guacamole Mex',
        content: 'Mexican Chilli',
        url: '/food-details',
      },
      {
        imageSrc:
          'https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        title: 'Carnet Nachos',
        content: 'Chilli Crispy Nachos',
        url: '/food-details',
      },
    ],
    Main: getRandomCards(),
    Soup: getRandomCards(),
    Pizza: getRandomCards(),
  },
}) => {
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
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
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? 'current' : 'hidden'}
            animate={activeTab === tabKey ? 'current' : 'hidden'}>
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Link to={card.url}>
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
                        <CardButton>View Details</CardButton>
                      </CardHoverOverlay>
                    </CardImageContainer>
                    <CardText>
                      <CardTitle>{card.title}</CardTitle>
                      <CardContent>{card.content}</CardContent>
                    </CardText>
                  </Card>
                </Link>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Chicken Chilled',
      content: 'Chicken Main Course',
      url: 'https://youtu.be/zdJMReSUIos',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Samsa Beef',
      content: 'Fried Mexican Beef',
      url: 'https://youtu.be/zdJMReSUIos',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Carnet Nachos',
      content: 'Chilli Crispy Nachos',
      url: 'https://youtu.be/zdJMReSUIos',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Guacamole Mex',
      content: 'Mexican Chilli',
      url: 'https://youtu.be/zdJMReSUIos',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Chillie Cake',
      content: 'Deepfried Chicken',
      url: 'https://youtu.be/zdJMReSUIos',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Nelli',
      content: 'Hamburger & Fries',
      url: 'https://youtu.be/zdJMReSUIos',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Jalapeno Poppers',
      content: 'Crispy Soyabeans',
      url: 'https://youtu.be/zdJMReSUIos',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      title: 'Cajun Chicken',
      content: 'Roasted Chicken & Egg',
      url: 'https://youtu.be/zdJMReSUIos',
    },
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
