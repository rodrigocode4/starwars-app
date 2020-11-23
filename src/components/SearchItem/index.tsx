import React, { useState, useEffect } from 'react'
import * as S from './styled'
import { Character } from 'Utils/types'

const SerachItem = ({ name, homeworld, gender, url }: Character) => {
  const [state, setState] = useState()
  useEffect(() => {
    async function fetchCharacter() {
      const rs = await fetch(url)
      const data = await rs.json()
      setState(data)
    }
    fetchCharacter()
  }, [url])

  function handleClick2() {
    console.log('state', state)
  }
  return (
    <S.WrapperItem>
      <S.WrapperLink
        to={`/${url.match(/\d+\//)?.[0]}`}
        onClick={() => {
          handleClick2()
        }}
      >
        <S.HeadingName>{name}</S.HeadingName>
        <S.HeadingPlanet>{homeworld}</S.HeadingPlanet>
        <S.HeadingGener>{gender}</S.HeadingGener>
        <S.HR />
      </S.WrapperLink>
    </S.WrapperItem>
  )
}
export default SerachItem
