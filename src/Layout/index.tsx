import React, { Suspense, lazy } from 'react'
import * as S from './styled'
import { BrowserRouter, Route } from 'react-router-dom'

import { Character as ICharacter } from 'Utils/types'
import GlobalStyle from 'Styles/global'
import Search from 'components/Search'
import Home from 'components/Home'
import Main from 'components/Main'
import ListCharacters from 'components/ListCharacters'
import Character from 'components/Character'

const ListCharacters2 = lazy(() => import('components/ListCharacters'))

type Props = {
  characters?: Array<ICharacter>
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
                    render={() => (
                      <>
                        <Suspense
                          fallback={<h1 style={{ color: 'red' }}>Loading</h1>}
                        >
                          <ListCharacters2 characters={characters} />
                        </Suspense>
                      </>
                    )}
                  />
                  <Route path={`/:id`} component={Character} />
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
