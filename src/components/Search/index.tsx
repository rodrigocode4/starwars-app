import React, { useContext, useState } from 'react'
import * as S from './styled'
import { FunctionContext } from 'Utils/context'
import type { Event } from 'Utils/types'
import { Link } from 'react-router-dom'

type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>

const Search = () => {
  const handleClick = useContext(FunctionContext)
  const [searchText, setSearchText] = useState<string>('')

  function handleChange(e: Event) {
    setSearchText(e.target.value)
  }

  function handleClickSearch(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    handleClick(searchText)
  }

  function handleInputSearch(e: KeyboardEvent) {
    if (e.key == 'Enter') {
      handleClick(searchText)
    }
  }

  return (
    <S.Form>
      <S.InputWrapper
        onClick={(e) => {
          if (searchText.length > 0) {
            e.preventDefault()
          }
          handleClick(searchText)
        }}
      >
        <S.SearchInput
          placeholder="Buscar personagem..."
          onKeyPress={(e) => handleInputSearch(e)}
          onChange={(e) => handleChange(e)}
          value={searchText}
        />
      </S.InputWrapper>

      <S.SearchBottom typeof="submit" onClick={(e) => handleClickSearch(e)}>
        <Link to="/">
          <S.SearchIconSVG />
        </Link>
      </S.SearchBottom>
    </S.Form>
  )
}

export default Search
