import React, { useContext, useState } from 'react'
import * as S from './styled'
import { FunctionContext } from 'Utils/context'
import type { Event } from 'Utils/types'
import { Link } from 'react-router-dom'

const Search = () => {
  const handleClick = useContext(FunctionContext)
  const [searchText, setSearchText] = useState('')

  function handleChange(e: Event) {
    setSearchText(e.target.value)
  }

  function handleClickSearch(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    handleClick(searchText)
  }

  return (
    <S.Form>
      <S.SearchInput
        placeholder="Buscar personagem..."
        onChange={(e) => handleChange(e)}
        value={searchText}
      />
      <S.SearchBottom typeof="submit" onClick={(e) => handleClickSearch(e)}>
        <Link to="/">
          <S.SearchIconSVG />
        </Link>
      </S.SearchBottom>
    </S.Form>
  )
}

export default Search
