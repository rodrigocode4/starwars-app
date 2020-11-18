import React from 'react'
import * as S from './styled'
import GlobalStyle from 'Styles/global'
import Search from 'components/Search'
import Home from 'components/Home'
import Main from 'components/Main'
import SearchItem from 'components/SearchItem'
import { Gener } from 'Utils'

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <S.LayoutWrapper>
        <Home />
        <Search />
        <Main>
          <ol>
            {[...Array<number>(15).keys()].map((e) => (
              <li key={e}>
                <SearchItem
                  name={'Luke Skywalker'}
                  homeworld={'Tatooine'}
                  gener={Gener.MALE}
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
