import React from 'react'
import * as S from './styled'
import GlobalStyle from 'Styles/global'
import Search from 'components/Search'
import Home from 'components/Home'
import Main from 'components/Main'
import ListCharacters from 'components/ListCharacters'

import { BrowserRouter, Route } from 'react-router-dom'

import { Character } from 'Utils/types'
type Props = {
  characters?: Array<Character>
}

const Layout = ({ characters }: Props) => {
  return (
    <>
      <GlobalStyle />
      <S.LayoutWrapper>
        <BrowserRouter>
          <Home />
          <Search />
          <Route
            path="/"
            render={() => (
              <>
                <Main>
                  <Route
                    exact
                    path="/"
                    render={() => <ListCharacters characters={characters} />}
                  />
                  <Route
                    path={`/:id`}
                    component={() => {
                      return (
                        <h1 style={{ color: 'red' }}>
                          <code>{JSON.stringify(characters)}</code>
                        </h1>
                      )
                    }}
                  />
                </Main>
              </>
            )}
          />
        </BrowserRouter>
      </S.LayoutWrapper>
    </>
  )
}

export default Layout
