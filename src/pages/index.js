import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import IntroCommitSvg from '../images/git-commit-intro.svg';
import { HTMLContent } from '../components/Content'
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import {
  FaLinkedin,
  FaStackOverflow,
  FaEnvelope,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';


const MobileOnlyGreeting = styled.div`
  text-align: center;
  @media only screen and (min-width: 768px) {
    display: none;
  }
  & h1 {
    margin-bottom: 0px;
    margin-top: 1em;
  }
`;

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
`;

const SocialLinks = styled.div`
  padding: 1.5em;
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  & li {
    display: flex;
    align-items: center;
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

const IntroImage = styled.img`
  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }
  margin: auto;
  margin-bottom: 1rem;
  display: block;
`;

const ProfileContainerDesktop = styled.div`
  width: 100%;
  margin: 2rem 0rem 2rem 2rem;
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

const ProfileContainerMobile = styled.div`
  width: 4em;
  display: inline-block;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const RoundImg = styled(Img)`
  border-radius: 50%;
`;

const IndexPage = ({ data }) => {
  let firstname = 'michael';
  let lastname = 'nilsson';
  return (
    <Layout>
      <SEO title="Home" keywords={['software', 'developer']} />
      
      <MobileOnlyGreeting><h1>Hello, I'm Michael</h1></MobileOnlyGreeting>
      <IntroImage src={IntroCommitSvg} alt="Introduction to Michael Nilsson" />
      <ContactContainer>
        <ProfileContainerDesktop>
          <RoundImg fluid={data.photo.childImageSharp.fluid} />
        </ProfileContainerDesktop>
        <SocialLinks>
          <HTMLContent content={data.content.html}></HTMLContent>
          <ul>
            <li>
              <ProfileContainerMobile><RoundImg fluid={data.photo.childImageSharp.fluid} /></ProfileContainerMobile>
            </li>
            <li>
                <FaTwitter />
                <a href="https://twitter.com/micnil_">micnil_</a>
            </li>
            <li>
              <FaGithub />
              <a href="https://github.com/micnil">micnil</a>
            </li>
            <li>
              <FaStackOverflow />
              <a href="https://stackoverflow.com/users/3346060/micnil">micnil</a>
            </li>
            <li>
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/nilssonmichael">nilssondev</a>
            </li>
            <li>
              <FaEnvelope />
              <span>
                {firstname}
                <span style={{ display: 'none' }} />
                &#64;{lastname}
                <span>{null}</span>&#46;dev
              </span>
            </li>
          </ul>
        </SocialLinks>
      </ContactContainer>
    </Layout>
  );
};

export const query = graphql`
  query {
    content: markdownRemark(frontmatter: { key: { eq: "home-page" } }) {
      frontmatter {
        title
      }
      html
    }
    photo: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
