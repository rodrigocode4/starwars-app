import styled from 'styled-components'
import media from 'styled-media-query'

export const CharacterWrapper = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #3a3a3a;
  border-radius: 5px;
  ${media.lessThan('medium')`
    align-items: center;
    overflow-y: auto;
    display: inline-grid;
    padding: 1rem 0 1rem 0;
    height: 93%;
  `}
  ${media.between('medium', 'large')`
    align-items: center;
    overflow-y: auto;
    display: inline-grid;
    padding: 1rem 0 1rem 0;
    height: 90%;
  `}
`

export const WrapperNameCharacter = styled.div``

export const NameCharacter = styled.h1`
  font-size: 1.7rem;
  color: #cacaca;
  font-weight: bold;
  ${media.greaterThan('huge')`
    font-size: 2.2rem;
  `}
`

export const WrapperCards = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-around;
  ${media.lessThan('medium')`
    flex-direction: column;
    align-items: center;
    margin-left: 15px;
  `}
  ${media.between('medium', 'large')`
    flex-direction: column;
    align-items: center;
    margin-left: 15px;
  `}
`

export const WrapperLinkCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
