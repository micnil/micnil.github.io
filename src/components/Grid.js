import styled from 'styled-components'

function getFlexString(span) {
  if (!span) return
  let width = (span / 12) * 100
  return `flex: 0 1 ${width}%;`
}

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Box = styled.div`

  justify-content: ${props => props.center ? "center" : "normal"};
  
  /* prettier-ignore */
  ${({ xs }) => (xs ? getFlexString(xs) : 'flex: 0 1 100%;')} 

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getFlexString(sm)};
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getFlexString(md)};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getFlexString(lg)};
  }
`
