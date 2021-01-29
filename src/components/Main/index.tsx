import React from 'react'
import * as S from './styled'
import { useLocation } from 'react-router-dom'

type Node = {
  children?: React.ReactNode
}

const Main = ({ children }: Node) => {
  const { pathname } = useLocation()
  const isCharacterIfo = pathname !== '/'
  return <S.LayoutMain isCharacterIfo={isCharacterIfo}>{children}</S.LayoutMain>
}

export default Main
