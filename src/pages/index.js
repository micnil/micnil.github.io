import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { HTMLContent } from '../components/Content'
import CodeBlock from "../components/CodeBlock";
import Email from '../components/Email';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics'
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

const Contact = styled.div`
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


const YellowText = styled.span`
  color: rgb(255, 204, 0);
`;

const GreyText = styled.span`
  color: rgb(174, 174, 170);
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

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={['software', 'developer', 'portfolio']} />
      <MobileOnlyGreeting><h1>Hello, I'm Michael</h1></MobileOnlyGreeting>
      <CodeBlock>
        <YellowText>></YellowText><span>{` git log -1
`}</span><GreyText>commit daff16378c079fb52c1bd27dc6f630988b0d222a</GreyText><span>{`
Author: Michael Nilsson <`}</span><YellowText><Email /></YellowText><span>{`>
Date:   Sun Mar 3 19:20:58 2019 +0200

    [#2157] `}</span><YellowText>Add introduction to Michael Nilsson</YellowText><span>{` 🚀

    Explain that Michael is a Swedish software developer, that enjoys
    solving interesting problems both professionally and as a hobby.
    Promote his interests in new technology, and that he is driven by
    building innovative solutions. Mention that he has a strong 
    background in `}</span><YellowText>web technologies</YellowText><span>{`, `}</span><YellowText>.NET</YellowText><span>{` and `}</span><YellowText>computer graphics</YellowText><span>{`. 

    Also point out that he has a `}</span><YellowText>Master of Science in Media Technology</YellowText><span>{`.`}</span>
      </CodeBlock>
      <ContactContainer>
        <ProfileContainerDesktop>
          <RoundImg fluid={data.photo.childImageSharp.fluid} />
        </ProfileContainerDesktop>
        <Contact>
          <HTMLContent content={data.content.html}></HTMLContent>
          <SocialLinks>
            <ProfileContainerMobile><RoundImg fluid={data.photo.childImageSharp.fluid} /></ProfileContainerMobile>
            <ul>
              <li>
                <FaTwitter />
                <OutboundLink href="https://twitter.com/micnil_">micnil_</OutboundLink>
              </li>
              <li>
                <FaGithub />
                <OutboundLink href="https://github.com/micnil">micnil</OutboundLink>
              </li>
              <li>
                <FaStackOverflow />
                <OutboundLink href="https://stackoverflow.com/users/3346060/micnil">micnil</OutboundLink>
              </li>
              <li>
                <FaLinkedin />
                <OutboundLink href="https://www.linkedin.com/in/nilssonmichael">nilssondev</OutboundLink>
              </li>
              <li>
                <FaEnvelope />
                <Email />
              </li>
            </ul>
          </SocialLinks>
        </Contact>
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
