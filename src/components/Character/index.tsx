import React, { useEffect, useState } from 'react'
import * as S from './styled'

import { ICharacter, IPlanet } from 'Utils/types'
import { useLocation } from 'react-router-dom'

import ProfileCard from './ProfileCard'
import LinkCard from './LinkCard'

const Character = () => {
  const [character, setCharacter] = useState<ICharacter>()
  const { pathname } = useLocation()

  useEffect(() => {
    if (character !== undefined) {
      return
    } else {
      fetchCharacter(pathname)
    }
  }, [pathname, character])

  async function fetchCharacter(pathname: string) {
    const rs = await fetch(`http://swapi.dev/api/people${pathname}`)
    const caracter: ICharacter = await rs.json()

    const planetResult = await fetch(caracter.homeworld)
    const { name: homeworld }: IPlanet = await planetResult.json()
    caracter.homeworld = homeworld
    setCharacter(caracter)
  }
  return (
    <>
      <S.CharacterWrapper>
        <ProfileCard character={character} />
        <LinkCard name="Vehicles" urlLink={character?.vehicles} />
        <LinkCard name="Starships" urlLink={character?.starships} />
        <LinkCard name="Films" urlLink={character?.films} />
      </S.CharacterWrapper>
    </>
  )
}

export default Character
