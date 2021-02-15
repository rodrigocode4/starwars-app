import styled from 'styled-components'
import { Link } from 'react-router-dom'
import media, { generateMedia } from 'styled-media-query'

export const Latter = styled.div`
  width: auto;
  font-size: 4.375rem;
  font-family: 'Star Jedi';
  font-weight: 400;
  color: #ffe81f;
  letter-spacing: 2px;

  ${media.between('small', 'medium')`
    font-size: 3.275rem;
  `}

  ${media.lessThan('small')`
    font-size: 2.2rem;
  `}

  ${generateMedia({ tiny: '280px' }).lessThan('tiny')`
    font-size: 1.8rem;
  `}
`
export const WrapperLatter = styled(Link).attrs({
  to: '/'
})`
  text-decoration: none;
`
