import styled from 'styled-components'
import media from 'styled-media-query'

export const WrapperItemProfile = styled.div`
  color: #cacaca;
  margin: 0.4rem 0 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.greaterThan('huge')`
    margin: 0.7rem 0 0.8rem 1.2rem;
  `}
  ${media.between('large', 'huge')`
    margin: 0.5rem 0 0.6rem 1rem;
  `}
`

export const Label = styled.label`
  font-size: 0.7rem;
  ${media.greaterThan('huge')`
    font-size: 1rem;
  `}
  ${media.between('large', 'huge')`
    font-size: 0.7rem;
  `}
`

export const BR = styled.br``

export const Strong = styled.strong`
  font-size: 1rem;
  ${media.greaterThan('huge')`
    font-size: 1.2rem;
  `}
`

export const HR = styled.hr`
  color: #ffe81f;
  background-color: #ffe81f;
  width: 80%;
  height: 1px;
  border: 0;
  margin: 0;
`
