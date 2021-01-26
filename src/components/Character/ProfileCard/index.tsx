import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import * as S from './styled'
import { ICharacter, IPlanet } from 'Utils/types'
import ItemProfile from '../ProfileCardItem'

const Profile = () => {
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

  const ProfileData = new Map<string, string | number | undefined>([
    ['Gender', character?.gender],
    ['Mass', character?.mass],
    ['Height', character?.height],
    ['Planet', character?.homeworld],
    ['Hair color', character?.hair_color],
    ['Skin color', character?.skin_color],
    ['Birth Year', character?.birth_year]
  ])

  return (
    <>
      <S.WrapperCharacter>
        <S.SectionTitle>Profile</S.SectionTitle>
        <S.UL>
          {[...ProfileData].map((element) => (
            <S.LI key={element[0]}>
              <ItemProfile keyLabel={element[0]} value={element[1]} />
            </S.LI>
          ))}
        </S.UL>
      </S.WrapperCharacter>
    </>
  )
}

export default Profile
