import styled from 'styled-components';
import { HTMLContent } from '../Content';


const WorkContent = styled(HTMLContent)`
  margin-top: 0.5em;
  
  /* Image caption */
  a + em { display: block; text-align: center;}

  iframe {
    display:block;
    margin: auto;
    margin-bottom: 1em;
  }
`;

export default WorkContent;