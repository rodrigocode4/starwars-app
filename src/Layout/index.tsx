import React from 'react'
import * as S from './styled'
import GlobalStyle from 'Styles/global'
import Search from 'components/Search'
import Home from 'components/Home'
import Main from 'components/Main'
import ListCharacters from 'components/ListCharacters'

import { Character } from 'Utils/types'
type Props = {
  characters?: Array<Character>
}

const Layout = ({ characters }: Props) => {
  return (
    <>
      <GlobalStyle />
      <S.LayoutWrapper>
        <Home />
        <Search />
        <Main>
          <ListCharacters characters={characters} />
        </Main>
      </S.LayoutWrapper>
    </>
  )
}

export default Layout
