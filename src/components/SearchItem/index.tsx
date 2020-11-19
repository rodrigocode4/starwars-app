import React, { useState, useEffect } from 'react'
import * as S from './styled'
import { Character } from 'Utils/context'

type Event = {
  preventDefault(): void
}

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

  function handleClick2(e: Event) {
    e.preventDefault()
    console.log(state)
  }
  return (
    <S.WrapperItem>
      <S.WrapperLink
        onClick={(e) => {
          handleClick2(e)
        }}
      >
        <S.HeadingName>{name}</S.HeadingName>
        <S.HeadingPlanet>{homeworld}</S.HeadingPlanet>
        <S.HeadingGener>{gender}</S.HeadingGener>
      </S.WrapperLink>
    </S.WrapperItem>
  )
}
export default SerachItem
