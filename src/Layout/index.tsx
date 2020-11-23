import React from 'react'
import * as S from './styled'
import GlobalStyle from 'Styles/global'
import Search from 'components/Search'
import Home from 'components/Home'
import Main from 'components/Main'
import ListCharacters from 'components/ListCharacters'

import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

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
          <Link to="/">
            <Home />
          </Link>
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
                    path={`/people/:id`}
                    component={() => (
                      <h1 style={{ color: 'red' }}>{characters?.toString()}</h1>
                    )}
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
