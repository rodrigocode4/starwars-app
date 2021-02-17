import React, { useState, MouseEvent } from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'
import { useSearch } from 'Utils/search.context'

const Search = () => {
  const { setSearch } = useSearch()
  const [value, setValue] = useState('')
  const history = useHistory()

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setSearch(value)
    history.push('/')
  }

  return (
    <>
      <S.Form>
        <S.SearchInput
          autoFocus
          type="text"
          placeholder="Buscar personagem..."
          onChange={(e) => setValue(e.target.value)}
        />
        <S.SearchBottom onClick={handleClick}>
          <S.SearchIconSVG />
        </S.SearchBottom>
      </S.Form>
    </>
  )
}

export default Search
