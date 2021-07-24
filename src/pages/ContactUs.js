import MiniCenteredFooter from 'components/footers/MiniCenteredFooter';
import Header from 'components/headers/light.js';
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons.js';
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings.js';
import EmailIllustrationSrc from 'images/email-illustration.svg';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-10 md:py-12`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`mt-16 md:w-7/12 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-full bg-center bg-no-repeat bg-contain rounded`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading,
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: 'textarea' })`
  ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

const ContactUs = ({
  subheading = 'Contact Us',
  heading = (
    <>
      Feel free to <span tw='text-primary-500'>get in touch</span>
      <wbr /> with us.
    </>
  ),

  submitButtonText = 'Send',
  formAction = 'https://formspree.io/xzbjnore',
  formMethod = 'POST',
  textOnLeft = true,
}) => {
  return (
    <>
      <Header />
      <Container>
        <TwoColumn>
          <ImageColumn>
            <Image imageSrc={EmailIllustrationSrc} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              {subheading && <Subheading>{subheading}</Subheading>}
              <Heading>{heading}</Heading>
              <Form action={formAction} method={formMethod}>
                <Input
                  type='hidden'
                  name='_subject'
                  value="New Message for Dave's Cantina"
                />
                <input
                  type='hidden'
                  name='_next'
                  value='https://www.davescantina.com/thank-you'
                />
                <Input
                  type='email'
                  name='_replyto'
                  placeholder='Your Email Address'
                  required
                />
                <Input
                  type='text'
                  name='name'
                  placeholder='Full Name'
                  required
                />
                <Input
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  required
                />
                <Textarea
                  name='message'
                  placeholder='Your Message Here'
                  required
                />
                <SubmitButton type='submit'>{submitButtonText}</SubmitButton>
              </Form>
            </TextContent>
          </TextColumn>
        </TwoColumn>
      </Container>
      <MiniCenteredFooter />
    </>
  );
};

export default ContactUs;
