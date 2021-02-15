import styled from 'styled-components'
import media from 'styled-media-query'

type PropStyle = {
  isCharacterIfo: boolean
}

export const LayoutMain = styled.main`
  width: 50vw;
  height: 60vh;
  background: #000000;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: ${({ isCharacterIfo }: PropStyle) =>
    isCharacterIfo ? 'center' : 'flex-start'};
  align-items: center;
  overflow-x: hidden;
  overflow-y: ${({ isCharacterIfo }: PropStyle) =>
    isCharacterIfo ? 'hidden' : 'scroll'};
  margin-left: ${({ isCharacterIfo }: PropStyle) =>
    isCharacterIfo ? '0' : '10px'};
  &::-webkit-scrollbar-thumb {
    background: #ffe81f;
    border-radius: 15px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 15px transparent;
    border-radius: 15px;
    height: 411px;
  }
  &::-webkit-scrollbar-button:single-button {
    background-color: transparent;
    display: block;
    height: 1px;
    width: 5px;
  }

  ${media.between('medium', 'huge')`
    width: 70vw;
    height: 60vh;
  `}

  ${media.between('small', 'medium')`
    width: 90vw;
    height: 70vh;
    margin-left: 0;
    margin-bottom: 3vh;
  `}

  ${media.lessThan('small')`
    width: 90vw;
    height: 66vh;
    margin-left: 0;
    margin-bottom: 3vh;
  `}
`
