import React from 'react'
import * as S from './styled'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import GlobalStyle from 'Styles/global'
import Search from 'components/Search'
import Home from 'components/Home'
import Main from 'components/Main'
import Character from 'components/Character'
import Modal from 'components/Modal'
import Header from 'components/Header'
import ListCharacters from 'components/ListCharacters'
import { useTransport } from 'Utils/context'

const Layout = () => {
  const { modalVisible } = useTransport()
  return (
    <>
      <GlobalStyle />
      <S.LayoutWrapper>
        <BrowserRouter>
          {modalVisible && <Modal />}
          <Header>
            <Home />
            <Search />
          </Header>
          <Main>
            <Switch>
              <Route exact path="/">
                <ListCharacters />
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
