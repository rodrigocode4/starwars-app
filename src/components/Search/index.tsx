import React, { useState, useEffect, MouseEvent } from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'
import { useSearch } from 'Utils/search.context'

const Search = () => {
  const { setSearch } = useSearch()
  const [value, setValue] = useState('')
  const history = useHistory()

  const queryValue = new URLSearchParams(location.search).get('q') || ''

  useEffect(() => {
    setValue(queryValue)
  }, [queryValue])

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setSearch(value)
    history.push({ pathname: '/search', search: `?q=${value}` })
  }

  return (
    <>
      <S.Form>
        <S.SearchInput
          autoFocus
          type="text"
          placeholder="ex: Luke Skywalker"
          value={value}
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
