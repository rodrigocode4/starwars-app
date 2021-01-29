import styled from 'styled-components'

type PropStyle = {
  isCharacterIfo: boolean
}

export const LayoutMain = styled.main`
  width: 799px;
  height: 421px;
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
`
