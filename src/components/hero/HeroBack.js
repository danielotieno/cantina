import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';

import { css } from 'styled-components/macro'; //eslint-disable-line
import tw from 'twin.macro';
import styled from 'styled-components';

import bgImage from '../../images/beef.jpg';
import Subscribe from '../../images/yout.png';

import Header, {
  NavLink,
  NavLinks,
  ContactLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from '../headers/light.js';

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;

const StyledHeader = styled(Header)`
  ${tw`w-full pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const Container = styled.div`
  ${tw`relative h-screen -mx-8 -mt-8 bg-center bg-cover min-h-144`}
  background-image: url(${bgImage});
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-25`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`-mt-24 text-3xl font-black leading-snug text-center text-gray-100 sm:text-4xl lg:text-5xl xl:text-6xl sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const YouSub = tw.div`h-40 w-40 mt-8`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink>
        <Link to='/'>Home</Link>
      </NavLink>
      <NavLink>
        <Link to='/about-us'>About Us</Link>
      </NavLink>
      {/* <NavLink>
        <Link to='/tours'>Tours</Link>
      </NavLink> */}
      <NavLink>
        <Link to='/food-videos'>Videos</Link>
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <Link to='/contact-us'>
        {' '}
        <PrimaryLink>Contact Us</PrimaryLink>
      </Link>
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
            Welcome to Dave's Cantina.
            <br />
            For Best Food Tours
          </Heading>
          <YouSub>
            <ExternalLink href='https://bit.ly/daves-cantina'>
              <img src={Subscribe} alt='YouTube Subscribe' />
            </ExternalLink>
          </YouSub>
        </Content>
      </HeroContainer>
    </Container>
  );
};
