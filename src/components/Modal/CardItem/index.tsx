import React from 'react'
import * as S from './styled'

type Props = {
  keyLabel: string
  value: string | number | undefined
}

const CardItem = ({ keyLabel, value }: Props) => {
  return (
    <S.WrapperItem>
      <S.HR />
      <S.Label title={keyLabel} htmlFor={keyLabel}>
        {keyLabel}
      </S.Label>
      <S.BR />
      <S.Strong title={String(value)} itemID={keyLabel}>
        {value}
      </S.Strong>
    </S.WrapperItem>
  )
}

export default CardItem
