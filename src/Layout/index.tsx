import React from 'react'
import * as S from './styled'
import GlobalStyle from 'Styles/global'
import Search from 'components/Search'
import Home from 'components/Home'
import Main from 'components/Main'
import SearchItem from 'components/SearchItem'
import { Character } from 'Utils/context'
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
          <ol>
            {characters?.map((character: Character) => (
              <li key={character.url}>
                <SearchItem
                  name={character.name}
                  homeworld={character.homeworld}
                  gender={character.gender || 'n/a'}
                  url={character.url}
                />
              </li>
            ))}
          </ol>
        </Main>
      </S.LayoutWrapper>
    </>
  )
}

export default Layout
