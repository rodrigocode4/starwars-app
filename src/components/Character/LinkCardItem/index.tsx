import React, { useState, useEffect } from 'react'
import * as S from './styled'

type Props = {
  name: string
  valueUrl: string
}

const LinkCardItem = ({ name, valueUrl }: Props) => {
  const [value, setValue] = useState<string>()
  useEffect(() => {
    setValue(valueUrl?.match(/\/(starships|vehicles|films)\/\d+\//)?.[0])
  }, [valueUrl])
  return (
    <S.WrapperLink>
      <S.WarapperName onClick={() => console.log(value)}>
        <S.Name title={name}>{name}</S.Name>
      </S.WarapperName>
      <S.HR />
    </S.WrapperLink>
  )
}

export default LinkCardItem
