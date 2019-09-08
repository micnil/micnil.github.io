import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Contact from '../components/home/Contact';
import GitMessage from '../components/home/GitMessage';
import { graphql } from 'gatsby';


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

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={['software', 'developer', 'portfolio']} />
      <MobileOnlyGreeting><h1>Hello, I'm Michael</h1></MobileOnlyGreeting>
      <GitMessage />
      <Contact 
        body={data.content.html}
        image={data.photo.childImageSharp}
        twitterHandle={"micnil_"}
        twitterUrl={"https://twitter.com/micnil_"}
        githubHandle={"micnil"}
        githubUrl={"https://github.com/micnil"}
        linkedinHandle={"nilssondev"}
        linkedinUrl={"https://www.linkedin.com/in/nilssonmichael"}
        stackOverflowHandle={"micnil"}
        stackOverflowUrl={"https://stackoverflow.com/users/3346060/micnil"}
        />
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
