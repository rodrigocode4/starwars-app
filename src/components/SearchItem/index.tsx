import React from 'react'
import * as S from './styled'
import { Character } from 'Utils/types'

const SerachItem = ({ name, homeworld, gender, url }: Character) => {
  return (
    <S.WrapperItem>
      <S.WrapperLink to={`/${url.match(/\d+\//)?.[0]}`}>
        <S.HeadingName>{name}</S.HeadingName>
        <S.HeadingPlanet>{homeworld}</S.HeadingPlanet>
        <S.HeadingGener>{gender}</S.HeadingGener>
        <S.HR />
      </S.WrapperLink>
    </S.WrapperItem>
  )
}
export default SerachItem
