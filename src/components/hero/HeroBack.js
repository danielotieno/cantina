import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'styled-components/macro'; //eslint-disable-line
import tw from 'twin.macro';
import styled from 'styled-components';

import bgImage from '../../images/beef.jpg';

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
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url(${bgImage});
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-25`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-orange-600 text-gray-100 hocus:bg-orange-800 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink>
        <Link to='/'>Home</Link>
      </NavLink>
      <NavLink>
        <Link to='/about-us'>About Us</Link>
      </NavLink>
      <NavLink>
        <Link to='/tours'>Tours</Link>
      </NavLink>
      <NavLink>
        <Link to='/food'>Food</Link>
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
          <PrimaryAction>
            <Link to='/tours'>Explore Tours</Link>
          </PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};
