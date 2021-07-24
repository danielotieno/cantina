import {
  SectionHeading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings.js';
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts.js';
import { SectionDescription } from 'components/misc/Typography.js';
import { ReactComponent as SvgDecoratorBlob3 } from 'images/svg-decorator-blob-3.svg';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`absolute bottom-0 right-0 w-64 transform translate-x-32 translate-y-40 opacity-25 pointer-events-none`}
`;

const ThreeColSimple = ({
  linkText = 'Learn More',
  heading = '',
  subheading = '',
  description = '',
  imageContainerCss = null,
  imageCss = null,
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
      </ContentWithPaddingXl>
      <DecoratorBlob />
    </Container>
  );
};

export default ThreeColSimple;
