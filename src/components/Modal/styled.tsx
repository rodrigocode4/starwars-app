import styled, { css } from 'styled-components'
import { Close } from '@styled-icons/ionicons-solid/Close'

export const WrapperModal = styled.div`
  position: absolute;
  backdrop-filter: blur(6px);
  width: 100%;
  height: 100%;
  background: #66585885;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${({ isVisible }: { isVisible: boolean }) =>
    isVisible ? 'visible' : 'hidden'};
`

export const BoxModal = styled.div`
  position: absolute;
  backdrop-filter: blur(6px);
  width: 580px;
  height: ${({ isFilm }: { isFilm: boolean }) => (isFilm ? 'auto' : '511px')};
  background: #000;
  border-radius: 8px;
  border-left: 8px solid #ffe81f;
`

export const CloseButtom = styled.button`
  height: 25px;
  width: 25px;
  position: absolute;
  right: 18px;
  top: 12px;
  color: #ffe81f;
  background-color: transparent;
  border: none;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
`

export const CloseIcon = styled(Close)`
  ${css`
    fill: #ffe81f;
    height: 25px;
    width: 25px;
    stroke: #ffe81f;
    stroke-width: 50;
  `}
`

export const TitleName = styled.h1`
  margin: 21px 0 0 77px;
  font-size: 36px;
  font-weight: 700;
  color: #cacaca;
  letter-spacing: 1px;
`

export const Head = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  height: 20%;
`

export const Body = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 90px;
  height: 80%;
`
