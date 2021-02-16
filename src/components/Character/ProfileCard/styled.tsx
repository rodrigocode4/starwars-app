import styled from 'styled-components'
import media from 'styled-media-query'

export const WrapperProfile = styled.div`
  ${media.lessThan('medium')`
    margin: 0.5rem 0 0.5rem 0;
  `}
`

export const WrapperProfileCard = styled.section`
  width: 200px;
  height: 328px;
  background: #2d2d2d;
  border-radius: 5px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.31);
  border-left: 7px solid #ffe81f;
  margin: 0;
  display: table;
`

export const SectionTitle = styled.h2`
  color: #cacaca;
  margin: 0 0 7px 7px;
  font-size: 18px;
`

export const UL = styled.ul``

export const LI = styled.li``
