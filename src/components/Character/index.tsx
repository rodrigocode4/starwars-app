import React, { useEffect, useState } from 'react'
import * as S from './styled'

import { ICharacter, IPlanet } from 'Utils/types'
import { useLocation } from 'react-router-dom'

import ProfileCard from './ProfileCard'
import VehiclesCard from './VehiclesCard'

const Character = () => {
  const [character, setCharacter] = useState<ICharacter>()
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
    setCharacter(caracter)
  }
  return (
    <>
      {console.log(character)}
      <S.CharacterWrapper>
        <ProfileCard character={character} />
        {/* <VehiclesCard urlVehicles={character?.vehicles} /> */}
      </S.CharacterWrapper>
    </>
  )
}

export default Character
