import React from 'react'
import * as S from './styled'

type Props = {
  keyLabel: string
  value: string | number | undefined
}

const ItemProfile = ({ keyLabel, value }: Props) => {
  return (
    <>
      <S.WrapperItemProfile>
        <S.Label htmlFor={keyLabel}>{keyLabel}</S.Label>
        <S.BR />
        <S.Strong itemID={keyLabel}>{value}</S.Strong>
        <S.HR />
      </S.WrapperItemProfile>
    </>
  )
}

export default ItemProfile
