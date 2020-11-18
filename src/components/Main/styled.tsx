import styled from 'styled-components'

export const LayoutMain = styled.main`
  width: 799px;
  height: 421px;
  background: #000000;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-left: 10px;
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
