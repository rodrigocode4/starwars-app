import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

export const WrapperItem = styled.div`
  padding: 10px 0 10px 0;
  width: 80%;
  overflow: hidden;
  color: #cacaca;
`

const HR = styled.hr`
  width: 36px;
  margin: 0;
  background: #ffe81f;
  border: 1px solid #ffe81f;
`

const Label = styled.label`
  margin-top: 4px;
  width: 48px;
  font-size: 18px;
  font-weight: 700;
  color: #cacaca;
  line-height: 25px;
`

const BR = styled.br``

export const Strong = styled.strong`
  font-size: 16px;
  font-weight: 300;
  color: #cacaca;
`

type PropsSinopseType = {
  keyLabel: string
  value: string | number | undefined
}

export const Sinopse = ({ keyLabel, value }: PropsSinopseType) => (
  <WrapperItem>
    <HR />
    <Label title={keyLabel} htmlFor={keyLabel}>
      {keyLabel}
    </Label>
    <BR />
    {[...String(value || '').split('\n\r')].map((paragrapher, index) => (
      <>
        <Strong key={index} title={paragrapher} itemID={keyLabel}>
          {paragrapher}
        </Strong>
        <BR />
      </>
    ))}
  </WrapperItem>
)

type PropsCharacterType = {
  keyLabel: string
  values: Array<string>
}

export const Character = ({ keyLabel, values }: PropsCharacterType) => (
  <WrapperItem>
    <HR />
    <Label title={keyLabel} htmlFor={keyLabel}>
      {keyLabel}
    </Label>
    <BR />
    {values
      .join(', .')
      .split('.')
      .map((value, index) => (
        <Strong
          key={index}
          title={String(value).replace(', ', '')}
          itemID={keyLabel}
        >
          {value}
        </Strong>
      ))}
  </WrapperItem>
)

export const WapperFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  ${media.lessThan('small')`
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
  `}
`
