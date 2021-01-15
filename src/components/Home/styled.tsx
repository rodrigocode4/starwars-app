import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Latter = styled.div`
  width: auto;
  font-size: 70px;
  font-family: 'Star Jedi';
  font-weight: 400;
  color: #ffe81f;
  letter-spacing: 2px;
`
export const WrapperLatter = styled(Link).attrs({
  to: '/'
})`
  text-decoration: 'node';
  color: transparent;
`
