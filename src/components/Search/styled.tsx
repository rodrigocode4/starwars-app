import styled, { css } from 'styled-components'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/'

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  background-color: #000000;
  justify-content: space-between;
  border-radius: 5px;
  border-width: 0px;
  border-style: none;
  height: 58px;
  width: 306px;
  margin-top: 42px;
  margin-bottom: 82px;
`

export const SearchInput = styled.input`
  width: 306px;
  height: 58px;
  background: #000000;
  border-radius: 5px 0 0 5px;
  border-width: 0px;
  color: #ffe81f;
  font-size: 16px;
  text-indent: 32px;
  border-style: none;
  outline: #ffe81f;
  border-color: #ffe81f;
`

export const SearchBottom = styled.button`
  width: 58px;
  height: 58px;
  background: #000000;
  border-radius: 0 5px 5px 0;
  border-width: 0px;
  font-size: 10px;
  text-indent: center;
  border-style: none;
  outline: #ffe81f;
  border-color: #ffe81f;
  &:hover {
    cursor: pointer;
  }
`

const Icon = css`
  fill: #ffe81f;
  height: 28px;
  width: 28px;
`

export const SearchIconSVG = styled(SearchIcon)`
  ${Icon}
`
