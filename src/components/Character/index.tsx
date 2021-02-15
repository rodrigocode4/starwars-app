import React, { useEffect, useState } from 'react'
import * as S from './styled'

import { ICharacter, IPlanet } from 'Utils/types'
import { useLocation } from 'react-router-dom'

import ProfileCard from './ProfileCard'
import LinkCard from './LinkCard'

const Character = () => {
  const [character, setCharacter] = useState<ICharacter>()
  const { pathname } = useLocation()
  const numberOfPeople = pathname.replace(/^\//, '')
  useEffect(() => {
    if (character !== undefined) {
      return
    } else {
      fetchCharacter(numberOfPeople)
    }
  }, [numberOfPeople, character])

  async function fetchCharacter(numberOfPeople: string) {
    const rs = await fetch(`https://swapi.dev/api/people/${numberOfPeople}`)
    const caracter: ICharacter = await rs.json()

    const planetResult = await fetch(
      caracter.homeworld.replace(/^http/, 'https')
    )
    const { name: homeworld }: IPlanet = await planetResult.json()
    caracter.homeworld = homeworld
    setCharacter(caracter)
  }
  return (
    <>
      <S.CharacterWrapper>
        <S.WrapperNameCharacter>
          <S.NameCharacter>{character?.name}</S.NameCharacter>
        </S.WrapperNameCharacter>
        <S.WrapperCards>
          <ProfileCard character={character} />
          <S.WrapperLinkCards>
            <LinkCard name="Vehicles" urlLink={character?.vehicles} />
            <LinkCard name="Starships" urlLink={character?.starships} />
          </S.WrapperLinkCards>
          <LinkCard name="Films" urlLink={character?.films} />
        </S.WrapperCards>
      </S.CharacterWrapper>
    </>
  )
}

export default Character
