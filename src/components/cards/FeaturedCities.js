import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SectionHeading as HeadingTitle } from '../misc/Headings.js';
import { ReactComponent as SvgDecoratorBlob1 } from '../../images/svg-decorator-blob-1.svg';
import { ReactComponent as LocationIcon } from 'feather-icons/dist/icons/map-pin.svg';
import { ReactComponent as SvgDecoratorBlob2 } from '../../images/svg-decorator-blob-3.svg';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap mb-10`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded mb-2`,
]);

const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;

const WatchLink = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1,
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2,
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

const ButtonContainer = tw.div`flex justify-center mt-3`;

const AllButton = tw.button`inline-block rounded justify-center items-center font-bold px-8 lg:px-10 py-3 rounded bg-orange-600 text-gray-100 hocus:bg-orange-700 focus:shadow-outline focus:outline-none transition duration-300 `;

export default () => {
  const tourPosts = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      category: 'Mombasa, Kenya',
      title: 'Amazing Mombasa Street Food',
      url: 'https://youtu.be/zdJMReSUIos',
    },
    {
      imageSrc:
        'https://images.pexels.com/photos/2165159/pexels-photo-2165159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'Mombasa, Kenya',
      title: 'Amazing Mombasa Street Food',
      url: 'https://youtu.be/zdJMReSUIos',
    },
    {
      imageSrc:
        'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'Mombasa, Kenya',
      title: 'Amazing Mombasa Street Food',
      url: 'https://youtu.be/zdJMReSUIos',
    },
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Popular Tours</HeadingTitle>
          <HeadingDescription>
            Some amazing street food, historical places and fun joints video
            tours made by awesome people.
          </HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {tourPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <IconWithText>
                  <IconContainer>
                    <LocationIcon />
                  </IconContainer>
                  <Text>{post.category}</Text>
                </IconWithText>
                <Title>{post.title}</Title>
                <ExternalLink href={post.url}>
                  <WatchLink>Watch Video</WatchLink>
                </ExternalLink>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
        <ButtonContainer>
          <AllButton>
            <Link to='/tours'>Explore All Tours</Link>
          </AllButton>
        </ButtonContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
