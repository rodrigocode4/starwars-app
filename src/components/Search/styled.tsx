import styled, { css } from 'styled-components'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/'
import media from 'styled-media-query'

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  background-color: #000000;
  justify-content: space-between;
  border-radius: 5px;
  border-width: 0px;
  border-style: none;
  height: 4.25rem;
  width: 19.125rem;

  ${media.between('small', 'medium')`
    height: 3.50rem;
    width: 17.125rem;
  `}

  ${media.lessThan('small')`
    height: 3rem;
    width: 14.5rem;
  `}
`
export const SearchInput = styled.input`
  height: inherit;
  background: #000000;
  border-radius: 5px 0 0 5px;
  border-width: 0px;
  color: #ffe81f;
  font-size: 1rem;
  text-indent: 2rem;
  border-style: none;
  border-color: #ffe81f;
  width: 90%;
  outline: none;

  ${media.between('small', 'medium')`
    text-indent: 1.5rem;
  `}

  ${media.lessThan('small')`
    text-indent: 0.5rem;
  `};
`

export const SearchBottom = styled.button.attrs({
  type: 'submit'
})`
  width: 20%;
  height: 100%;
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

export const SearchIconSVG = styled(SearchIcon)`
  ${css`
    fill: #ffe81f;
    height: 28px;
    width: 28px;
  `}
`
