import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Container as ContainerBase } from 'components/misc/Layouts.js';
import logo from '../../images/logo.png';
import { ReactComponent as FacebookIcon } from '../../images/facebook-icon.svg';
import { ReactComponent as InstagramIcon } from '../../images/insta.svg';
import { ReactComponent as YoutubeIcon } from '../../images/youtube-icon.svg';
import { ReactComponent as TwitterIcon } from '../../images/twitter-icon.svg';

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-56 h-56`;

const ConnectText = tw.h5`ml-12 pr-4 items-center text-2xl pb-4 font-black tracking-wider`;

const LinksContainer = tw.div`font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const FooterLink = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} alt='Logo Image' />
          </LogoContainer>
          <LinksContainer>
            <FooterLink>
              <Link to='/'>Home</Link>
            </FooterLink>
            <FooterLink>
              <Link to='/about-us'>About</Link>
            </FooterLink>
            <FooterLink>
              <Link to='/tours'>Tours</Link>
            </FooterLink>
            <FooterLink>
              <Link to='/food'>Food</Link>
            </FooterLink>
            <FooterLink>
              <Link to='/contact-us'>Contact Us</Link>
            </FooterLink>
          </LinksContainer>
          <SocialLinksContainer>
            <ConnectText>Let's Connect</ConnectText>
            <SocialLink>
              <ExternalLink href='https://www.facebook.com/davescantina01'>
                <FacebookIcon />
              </ExternalLink>
            </SocialLink>
            <SocialLink>
              <ExternalLink href='https://youtube.com/channel/UClls_utth_273YWv-WLqPVw'>
                <YoutubeIcon />
              </ExternalLink>
            </SocialLink>
            <SocialLink>
              <ExternalLink href='https://www.instagram.com/at_davescantina/'>
                <InstagramIcon />
              </ExternalLink>
            </SocialLink>
            <SocialLink>
              <ExternalLink href='https://twitter.com/DavesCantina'>
                <TwitterIcon />
              </ExternalLink>
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
