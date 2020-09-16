import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro';
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts.js';
import { SectionHeading } from 'components/misc/Headings';
import { SectionDescription } from 'components/misc/Typography';
import { ReactComponent as TwitterIcon } from 'images/twitter-icon.svg';
import { ReactComponent as InstagramIcon } from 'images/insta.svg';
import { ReactComponent as FacebookIcon } from 'images/facebook-icon.svg';
import Daniel from 'images/dp.jpg';
import Maguire from 'images/mag.jpeg';

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center italic`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url('${props.imageSrc}');
    `}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

export default ({
  heading = 'Meet The Team',
  description = 'Coming together is a beginning, staying together is progress, and working together is success. – Henry Ford ',
  cards = [
    {
      imageSrc: `${Maguire}`,
      position: 'Founder',
      name: 'David Maguire',
      links: [
        {
          url: 'https://www.facebook.com/david.maguire.37',
          icon: FacebookIcon,
        },
        {
          url: 'https://www.instagram.com/davidmaguireirl/?hl=en',
          icon: InstagramIcon,
        },
        {
          url: 'https://github.com',
          icon: TwitterIcon,
        },
      ],
    },
    {
      imageSrc: `${Daniel}`,
      position: 'Team Lead',
      name: 'Daniel Otieno',
      links: [
        {
          url: 'https://www.facebook.com/daniel.otieno.ke/',
          icon: FacebookIcon,
        },
        {
          url: 'https://www.instagram.com/danielotienoke/?hl=en',
          icon: InstagramIcon,
        },
        {
          url: 'https://twitter.com/danielotienoke',
          icon: TwitterIcon,
        },
      ],
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className='position'>{card.position}</span>
                <span className='name'>{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className='link' href={link.url}>
                      <link.icon className='icon' />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
