import React from 'react'
import * as S from './styled'
import { T } from 'Utils'

const SerachItem = ({ name, homeworld, gener }: T) => (
  <S.WrapperItem>
    <S.WrapperLink>
      <S.HeadingName>{name}</S.HeadingName>
      <S.HeadingPlanet>{homeworld}</S.HeadingPlanet>
      <S.HeadingGener>{gener}</S.HeadingGener>
    </S.WrapperLink>
  </S.WrapperItem>
)

export default SerachItem
