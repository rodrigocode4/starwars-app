import React from 'react'
import * as S from './styled'

type Node = {
  children?: React.ReactNode
}

const Main = ({ children }: Node) => <S.LayoutMain>{children}</S.LayoutMain>

export default Main
