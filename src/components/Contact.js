import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { HTMLContent } from './Content'
import Email from '../components/Email';
import Img from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import {
  FaLinkedin,
  FaStackOverflow,
  FaEnvelope,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';

const StyledContact = styled.div`
  width: 100%;
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.1em;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  & li {
    display: flex;
    align-items: center;
    margin-left: 0.7em;
  }

  & svg {
    margin-right: 0.1em;
  }

  @media only screen and (min-width: 768px) {
    & ul {
      display: initial;
    }
  }
`;

const ProfileContainerDesktop = styled.div`
  width: 100%;
  margin: 2rem 0rem 2rem 2rem;
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
    flex: 1 0.5 400px;
  }
`;

const ProfileContainerMobile = styled.div`
  width: 4em;
  display: inline-block;
  flex: 0.0 1 250px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const RoundImg = styled(Img)`
  border-radius: 50%;
`;

const Contact = (props) => {
  return (
    <StyledContact>
      <ProfileContainerDesktop>
        <RoundImg fluid={props.image.fluid} />
      </ProfileContainerDesktop>
      <Column>
        <HTMLContent content={props.body}></HTMLContent>
        <SocialLinks>
          <ProfileContainerMobile>
            <RoundImg fluid={props.image.fluid} />
          </ProfileContainerMobile>
          <ul>
            {props.twitterHandle &&
            <li>
              <FaTwitter />
              <OutboundLink href={props.twitterUrl}>
                {props.twitterHandle}
              </OutboundLink>
            </li>}
            {props.githubHandle &&
            <li>
              <FaGithub />
              <OutboundLink href={props.githubUrl}>
                {props.githubHandle}
              </OutboundLink>
            </li>}
            {props.stackOverflowHandle && 
            <li>
              <FaStackOverflow />
              <OutboundLink href={props.stackOverflowUrl}>
                {props.stackOverflowHandle}
              </OutboundLink>
            </li>}
            {props.linkedinHandle && 
            <li>
              <FaLinkedin />
              <OutboundLink href={props.linkedinUrl}>
                {props.linkedinHandle}
              </OutboundLink>
            </li>}
            <li>
              <FaEnvelope />
              <Email />
            </li>
          </ul>
        </SocialLinks>
      </Column>
    </StyledContact>
  );
};

Contact.propTypes = {
  image: PropTypes.object,
  body: PropTypes.string,
  twitterHandle: PropTypes.string,
  twitterUrl: PropTypes.string,
  githubHandle: PropTypes.string,
  githubUrl: PropTypes.string,
  stackOverflowHandle: PropTypes.string,
  stackOverflowUrl: PropTypes.string,
  linkedinHandle: PropTypes.string,
  linkedinUrl: PropTypes.string,
};

export default Contact;