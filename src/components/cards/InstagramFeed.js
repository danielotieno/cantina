import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SectionHeading } from 'components/misc/Headings';

import { Container } from 'components/misc/Layouts.js';
const Heading = tw(SectionHeading)`pb-5`;
// const Content = tw.div`max-w-screen-xl mx-auto`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col flex-wrap items-center max-w-screen-lg py-16 mx-auto md:items-stretch md:flex-row md:justify-center md:py-10`}
`;

const PostsContainer = tw.div`inline-block px-2 items-center rounded shadow-lg border-b border-gray-700`;

export default () => {
  const posts = [
    {
      url: 'https://www.instagram.com/p/CK3KvUPD-GR/',
    },
    {
      url: 'https://www.instagram.com/p/CLOm7u1j4B3/',
    },
    {
      url: 'https://www.instagram.com/p/CLfQLgIDZk_/',
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
              clientAccessToken='689793628606664|8715ca968216b9239eab5d1437420e83'
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
