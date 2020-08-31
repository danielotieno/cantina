import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SectionHeading } from 'components/misc/Headings';

const Container = tw.div`relative`;
const Heading = tw(SectionHeading)`pb-5`;

const PostsContainer = tw.div`inline-block px-5 items-center `;

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
      url: 'https://www.instagram.com/p/B99XGD4HJws/',
    },
  ];
  return (
    <Container>
      <Heading>Follow Us on Instagram</Heading>
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
    </Container>
  );
};