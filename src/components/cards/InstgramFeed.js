import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SectionHeading } from 'components/misc/Headings';

import { Container } from 'components/misc/Layouts.js';
const Heading = tw(SectionHeading)`pb-5`;
// const Content = tw.div`max-w-screen-xl mx-auto`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-10 md:py-10`}
`;

const PostsContainer = tw.div`inline-block pr-5 items-center`;

export default () => {
  const posts = [
    {
      url: 'https://www.instagram.com/p/CC_7UAOnKI1/',
    },
    {
      url: 'https://www.instagram.com/p/B_qJVdMH739/',
    },
    {
      url: 'https://www.instagram.com/p/B8Tw_1JHLT7/',
    },
    {
      url: 'https://www.instagram.com/p/B9FONvLnKjI/',
    },
    {
      url: 'https://www.instagram.com/p/B7t_8UjHGLh/',
    },
    {
      url: 'https://www.instagram.com/p/B9U-5qpnTsI/',
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
