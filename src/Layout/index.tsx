import React, { Suspense, lazy } from 'react'
import * as S from './styled'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Character as ICharacter } from 'Utils/types'
import GlobalStyle from 'Styles/global'
import Search from 'components/Search'
import Home from 'components/Home'
import Main from 'components/Main'
import Character from 'components/Character'
import Modal from 'components/Modal'

const ListCharacters = lazy(() => import('components/ListCharacters'))

type Props = {
  characters?: Array<ICharacter>
}

const Layout = ({ characters }: Props) => {
  return (
    <>
      <GlobalStyle />
      <S.LayoutWrapper>
        <BrowserRouter>
          <Modal />
          <Home />
          <Search />
          <Main>
            <Switch>
              <Route exact path="/">
                <Suspense fallback={<h1 style={{ color: 'red' }}>Loading</h1>}>
                  {characters !== undefined && (
                    <ListCharacters characters={characters} />
                  )}
                </Suspense>
              </Route>
              <Route path="/:id">
                <Character />
              </Route>
            </Switch>
          </Main>
        </BrowserRouter>
      </S.LayoutWrapper>
    </>
  )
}

export default Layout
