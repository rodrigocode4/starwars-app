import React from 'react'
import * as S from './styled'

type Props = {
  children?: React.ReactNode
}

const Header = ({ children }: Props) => <S.Header>{children}</S.Header>

export default Header
