import React from 'react'
import * as S from './styled'
import { ICharacter } from 'Utils/index'
import ItemProfile from '../ProfileCardItem'

type Props = {
  character?: ICharacter
}

const Profile = ({ character }: Props) => {
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
          {}
        </S.UL>
      </S.WrapperCharacter>
    </>
  )
}

export default Profile
