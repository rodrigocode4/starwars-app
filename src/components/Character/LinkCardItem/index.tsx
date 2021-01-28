import React from 'react'
import * as S from './styled'

type Props = {
  name: string
  valueUrl: string
}

const LinkCardItem = ({ name, valueUrl }: Props) => {
  return (
    <S.WrapperLink>
      <S.WarapperName
        to={`/${valueUrl?.match(/(starships|vehicles|films)\/\d+\//)?.[0]}`}
      >
        <S.Name title={name}>{name}</S.Name>
      </S.WarapperName>
      <S.HR />
    </S.WrapperLink>
  )
}

export default LinkCardItem
