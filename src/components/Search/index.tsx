import React from 'react'
import * as S from './styled'

const Search = () => {
  return (
    <S.Form>
      <S.SearchInput placeholder="Buscar personagem..." />
      <S.SearchBottom>
        <S.SearchIconSVG />
      </S.SearchBottom>
    </S.Form>
  )
}

export default Search
