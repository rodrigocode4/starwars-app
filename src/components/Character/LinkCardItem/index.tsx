import React, { useState, useEffect } from 'react'
import * as S from './styled'

import { useTransport } from 'Utils/context'

type Props = {
  name: string
  valueUrl: string
}

const LinkCardItem = ({ name, valueUrl }: Props) => {
  const [value, setValue] = useState<string>()
  const { setParam, setModalVisible } = useTransport()
  useEffect(() => {
    if (value !== undefined) {
      return
    } else {
      setValue(valueUrl?.match(/\/(starships|vehicles|films)\/\d+\//)?.[0])
    }
  }, [valueUrl, value])

  return (
    <S.WrapperLink>
      <S.WarapperName
        onClick={() => {
          if (value !== undefined) {
            setParam(value)
            setModalVisible(true)
          }
        }}
      >
        <S.Name title={name}>{name}</S.Name>
      </S.WarapperName>
      <S.HR />
    </S.WrapperLink>
  )
}

export default LinkCardItem
