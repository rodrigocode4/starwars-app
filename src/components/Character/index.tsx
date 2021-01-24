import React, { useEffect, useState } from 'react'
import { ICharacter, IPlanet } from 'Utils/index'
import { useLocation } from 'react-router-dom'
import Profile from './ProfileCard'
import * as S from './styled'

const Character = () => {
  const [state, setState] = useState<ICharacter>()
  const { pathname } = useLocation()

  useEffect(() => {
    fetchCharacter(pathname)
  }, [pathname])

  async function fetchCharacter(pathname: string) {
    const rs = await fetch(`http://swapi.dev/api/people${pathname}`)
    const caracter: ICharacter = await rs.json()

    const planetResult = await fetch(caracter.homeworld)
    const { name: homeworld }: IPlanet = await planetResult.json()
    caracter.homeworld = homeworld
    setState(caracter)
  }

  return (
    <>
      <S.CharacterWrapper>
        <Profile character={state} />
      </S.CharacterWrapper>
    </>
  )
}

export default Character
