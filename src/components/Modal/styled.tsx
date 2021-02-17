import styled, { css } from 'styled-components'
import { Close } from '@styled-icons/ionicons-solid/Close'
import media from 'styled-media-query'

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
  overflow: hidden;
  ${media.lessThan('small')`
    overflow-y: auto;
  `}
`

export const BoxModal = styled.div`
  position: absolute;
  backdrop-filter: blur(6px);
  width: 580px;
  height: ${({ isFilm }: { isFilm: boolean }) => (isFilm ? 'auto' : '511px')};
  background: #000;
  border-radius: 8px;
  border-left: 8px solid #ffe81f;

  ${media.lessThan('small')`
    width: 90%;
    height: 90%;
  `}
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
  font-size: 45px;
  font-weight: 700;
  color: #cacaca;
  letter-spacing: 1px;
  width: 70%;
  padding: 22px 0 10px 0;
  ${media.lessThan('small')`
    font-size: 26px;
  `}
`

export const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 15%;
  min-height: 75px;
`

export const Body = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  height: 80%;
  ${media.lessThan('small')`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow-y: scroll;
  `}
`
