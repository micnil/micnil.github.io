import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import CodeBlock from "../components/CodeBlock";
import Email from '../components/Email';
import Contact from '../components/Contact';
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

const YellowText = styled.span`
  color: rgb(255, 204, 0);
`;

const GreyText = styled.span`
  color: rgb(174, 174, 170);
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
