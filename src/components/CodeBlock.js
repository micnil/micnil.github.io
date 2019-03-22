import React from 'react';
import styled from 'styled-components';

const Preformatted = styled.pre`
  display: block;
  background-color: rgb(43, 62, 80);
  margin-top: 2em;
  padding: 0.5em;
  box-shadow: 0px 10px 25px;

  overflow: hidden;

  @media only screen and (min-width: 615px) {
    padding: 1em;
    border-radius: 5px;
    margin: 2em;
  }
`;

const Terminal = styled.code`
  display: inline-block;
  color: rgb(248, 248, 242);
  line-height: 1.3em;
  font-size: 60%;

  @media only screen and (min-width: 400px) {
    font-size: 70%;
  }

  @media only screen and (min-width: 450px) {
    font-size: 80%;
  }

  @media only screen and (min-width: 500px) {
    font-size: 90%;
  }

  @media only screen and (min-width: 615px) {
    font-size: 100%;
  }
`;

const Dot = styled.span`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 0.5em;
  margin-bottom: 0.8em;

  @media only screen and (min-width: 615px) {
    height: 12px;
    width: 12px;
  }
`;

const RedDot = styled(Dot)`
  background-color: rgb(255, 95, 86);
`;

const YellowDot = styled(Dot)`
  background-color: rgb(255, 189, 46);
`;

const GreenDot = styled(Dot)`
  background-color: rgb(39, 201, 63);
`;

const CodeBlock = ({ children }) => {
  return (
    <Preformatted>
      <Terminal>
        <div>
          <RedDot />
          <YellowDot />
          <GreenDot />
        </div>
        {children}
      </Terminal>
    </Preformatted>
  );
};

export default CodeBlock;