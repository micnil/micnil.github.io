import React from 'react';
import styled from 'styled-components';
import CodeBlock from '../CodeBlock';
import Email from '../Email';

const Yellow = styled.span`
  color: rgb(255, 204, 0);
`;

const Grey = styled.span`
  color: rgb(174, 174, 170);
`;

const GitMessage = () => (
<CodeBlock>
  <Yellow>></Yellow><span>{` git log -1
`}</span><Grey>commit daff16378c079fb52c1bd27dc6f630988b0d222a</Grey><span>{`
Author: Michael Nilsson <`}</span><Yellow><Email /></Yellow><span>{`>
Date:   Sun Mar 3 19:20:58 2019 +0200

    [#2157] `}</span><Yellow>Add introduction to Michael Nilsson</Yellow><span>{` 🚀

    Explain that Michael is a Swedish software developer, that enjoys
    solving interesting problems both professionally and as a hobby.
    Promote his interests in new technology, and that he is driven by
    building innovative solutions. Mention that he has a strong 
    background in `}</span><Yellow>web technologies</Yellow><span>{`, `}</span><Yellow>.NET</Yellow><span>{` and `}</span><Yellow>computer graphics</Yellow><span>{`. 

    Also point out that he has a `}</span><Yellow>Master of Science in Media Technology</Yellow><span>{`.`}</span>
</CodeBlock>
);

export default GitMessage;