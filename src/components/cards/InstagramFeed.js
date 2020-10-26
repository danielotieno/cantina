import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SectionHeading } from 'components/misc/Headings';

import { Container } from 'components/misc/Layouts.js';
const Heading = tw(SectionHeading)`pb-5`;
// const Content = tw.div`max-w-screen-xl mx-auto`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-16 md:py-10`}
`;

const PostsContainer = tw.div`inline-block px-2 items-center`;

export default () => {
  const posts = [
    {
      url: 'https://www.instagram.com/p/CGr6AbqHpVz/',
    },
    {
      url: 'https://www.instagram.com/p/CGryPc0nbaA/',
    },
    {
      url: 'https://www.instagram.com/p/B8Tw_1JHLT7/',
    },
  ];
  return (
    <Container>
      <Heading>Follow Us on Instagram</Heading>
      <ThreeColumnContainer>
        {posts.map((post, index) => (
          <PostsContainer key={index}>
            <InstagramEmbed
              url={post.url}
              maxWidth={320}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </PostsContainer>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};