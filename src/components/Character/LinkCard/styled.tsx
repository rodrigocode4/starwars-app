import styled from 'styled-components'
import media from 'styled-media-query'

export const WrapperLink = styled.div`
  ${media.lessThan('medium')`
    margin: 0.5rem 0 0.5rem 0;
  `}
  ${media.between('medium', 'large')`
    margin: 0.5rem 0 0.5rem 0;
  `}
`

export const WrapperLinkCards = styled.section`
  width: 200px;
  height: auto;
  background: #2d2d2d;
  border-radius: 5px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.31);
  border-left: 7px solid #ffe81f;
  margin: 0;
  padding-bottom: 5px;
  ${media.greaterThan('huge')`
    padding-bottom: 2px;
  `}
`

export const SectionTitle = styled.h2`
  color: #cacaca;
  font-size: 18px;
  display: inline;
`

export const UL = styled.ul``

export const LI = styled.li``
